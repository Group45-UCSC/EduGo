const pool = require("../../dbConnection");

const addComplaint = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { complaintType, complaintDetails, dateOfOccurrence, attachments,sendToVC} = req.body;

    //genarate complaint id
    const lastComplaintData = await pool.query(
      "SELECT * FROM driver_complaint ORDER BY complaint_id DESC LIMIT 1"
    );

    //Creat feedback id
    const lastComplaintId = lastComplaintData.rows[0]?.complaint_id || "DC000"; // Default to PR0000 if no user_id found
    const numericPart = parseInt(lastComplaintId.replace("DC", ""), 10); // Extract numeric part and convert to integer
    const newNumericPart = numericPart + 1;
    const newComplaintId = `DC${newNumericPart.toString().padStart(3, "0")}`; // Generate new user ID

    const newComplaint = await pool.query(
      "INSERT INTO driver_complaint (complaint_id,user_id,complainttype, complaintdetails, dateofoccurrence, attachments,sendtovc) VALUES ($1, $2, $3, $4,$5,$6,$7) RETURNING *;",
      [newComplaintId,userId,complaintType, complaintDetails, dateOfOccurrence, attachments, sendToVC]
    );
    return res.json(newComplaint.rows[0]);
    // const values = [complaintType, complaintDetails, dateOfOccurrence, attachments];

    // const result = await pool.query(query, values);

    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};

const viewUserComplaints = async (req, res) => {
  try {
    const userId = req.params.userId;

    const complaints = await pool.query(
      `SELECT dc.*, cs.status
      FROM driver_complaint dc
      LEFT JOIN complaint_status cs ON dc.complaint_id = cs.complaint_id
      WHERE dc.user_id = $1`,
     [userId]
    );

    res.status(200).json(complaints.rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
module.exports = { addComplaint, viewUserComplaints };
