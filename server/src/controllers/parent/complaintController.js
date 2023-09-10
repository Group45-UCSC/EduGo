const pool = require("../../dbConnection");

const addComplaint = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { complaintType, complaintDetails, dateOfOccurrence, attachments } = req.body;

    //genarate complaint id
    const lastComplaintData = await pool.query(
      "SELECT * FROM parent_complaint ORDER BY complaint_id DESC LIMIT 1"
    );

    //Creat feedback id
    const lastComplaintId = lastComplaintData.rows[0]?.complaint_id || "PC000"; // Default to PR0000 if no user_id found
    const numericPart = parseInt(lastComplaintId.replace("PC", ""), 10); // Extract numeric part and convert to integer
    const newNumericPart = numericPart + 1;
    const newComplaintId = `PC${newNumericPart.toString().padStart(3, "0")}`; // Generate new user ID

    const newComplaint = await pool.query(
      "INSERT INTO parent_complaint (complaint_id,user_id,complainttype, complaintdetails, dateofoccurrence, attachments) VALUES ($1, $2, $3, $4,$5,$6) RETURNING *;",
      [newComplaintId,userId,complaintType, complaintDetails, dateOfOccurrence, attachments]
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

module.exports = { addComplaint };
