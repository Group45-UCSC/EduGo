const pool = require("../../dbConnection");

const viewComplaints = async (req, res) => {
  try {
    const query = await pool.query(`
    SELECT pc.complaint_id, pc.user_id, pc.complaintdetails, pc.dateofoccurrence, pc.attachments, pc.complainttype AS type, ru.user_name, cs.status
    FROM (
        SELECT complaint_id, user_id, complaintdetails, dateofoccurrence, attachments, complainttype
        FROM parent_complaint
        UNION ALL
        SELECT complaint_id, user_id, complaintdetails, dateofoccurrence, attachments, complainttype
        FROM driver_complaint
    ) AS pc
    JOIN registered_users ru ON pc.user_id = ru.user_id
    LEFT JOIN complaint_status cs ON pc.complaint_id = cs.complaint_id;
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

const updateStatus = async (req, res) => {
  const { complaintId } = req.params;
  const { status } = req.body;

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Delete the previous status for the complaint
    await client.query('DELETE FROM complaint_status WHERE complaint_id = $1', [complaintId]);

    // Insert the new status
    await client.query(
      'INSERT INTO complaint_status (complaint_id, status) VALUES ($1, $2)',
      [complaintId, status]
    );

    await client.query('COMMIT');

    res.status(200).json({ status: 'success' });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  } finally {
    client.release();
  }
};


module.exports = { viewComplaints, updateStatus };
