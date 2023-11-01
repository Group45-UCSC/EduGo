const pool = require("../../dbConnection");

const viewComplaints = async (req, res) => {
  try {
    const query = await pool.query(`
    SELECT pc.complaint_id, pc.user_id, pc.complaintdetails, pc.dateofoccurrence,pc.attachments, pc.complainttype AS type, ru.user_name
    FROM (
        SELECT complaint_id, user_id, complaintdetails, dateofoccurrence, attachments, complainttype
        FROM parent_complaint
        UNION ALL
        SELECT complaint_id, user_id, complaintdetails, dateofoccurrence,attachments, complainttype
        FROM driver_complaint
    ) AS pc
    JOIN registered_users ru ON pc.user_id = ru.user_id;
    
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

const updateStatus = async (req,res) => {
  const {complaintId} = req.params;
  const {status} = req.body;

  try {
    await pool.query(
      `INSERT INTO complaint_status (complaint_id, status) VALUES ($1, $2)`,
      [complaintId, status]
    );
    res.status(200).json({status:"success"});
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status:"error",
      message: " Internal server error",
    });
  }

};

module.exports = { viewComplaints, updateStatus };
