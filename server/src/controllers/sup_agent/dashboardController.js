const pool = require("../../dbConnection");

const complaintStatus = async (req,res) => {
    try {
        const statusCounts = await pool.query(`
          SELECT
            SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS pendingCount,
            SUM(CASE WHEN status = 'done' THEN 1 ELSE 0 END) AS completedCount
          FROM complaint_status;
        `);
    
        res.status(200).json(statusCounts.rows[0]);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
          status: "error",
          message: "Internal server error",
        });
      }
}
const newComplaintsCount = async (req, res) => {
  try {
    const query = await pool.query(`
    SELECT COUNT(c.complaint_id) AS newCount
    FROM (
      SELECT complaint_id
      FROM parent_complaint
      UNION ALL
      SELECT complaint_id
      FROM driver_complaint
    ) AS c
    LEFT JOIN complaint_status cs ON c.complaint_id = cs.complaint_id
    WHERE cs.complaint_id IS NULL;
    
    `);

    const data = query.rows;
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
module.exports = {complaintStatus, newComplaintsCount};