const pool = require("../../dbConnection");

const addComplaint = async (req, res) => {
  try {
    const { complaintType, complaintDetails, dateOfOccurrence, attachments } = req.body;

    const result = await pool.query(
      "INSERT INTO complaints (complaint_type, complaint_details, date_of_occurrence, attachments) VALUES ($1, $2, $3, $4) RETURNING *;",
      [complaintType, complaintDetails, dateOfOccurrence, attachments]
    );
    // const values = [complaintType, complaintDetails, dateOfOccurrence, attachments];

    // const result = await pool.query(query, values);

    res.status(201).json({
      status: 'success',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
};

module.exports = { addComplaint };
