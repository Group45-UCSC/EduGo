const pool = require("../../dbConnection");
const upload = require("../../utils/multer");

const addComplaint = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { complaintType, complaintDetails, dateOfOccurrence } = req.body;

    // Handle file uploads
    const attachments = req.files;

    // Check if dateOfOccurrence is valid (not null or empty)
    const validDateOfOccurrence = dateOfOccurrence !== null && dateOfOccurrence !== '';

    // Generate complaint id
    const lastComplaintData = await pool.query(
      "SELECT * FROM parent_complaint ORDER BY complaint_id DESC LIMIT 1"
    );

    // Create complaint id
    const lastComplaintId = lastComplaintData.rows[0]?.complaint_id || "PC000";
    const numericPart = parseInt(lastComplaintId.replace("PC", ""), 10);
    const newNumericPart = numericPart + 1;
    const newComplaintId = `PC${newNumericPart.toString().padStart(3, "0")}`;

    const newComplaint = await pool.query(
      "INSERT INTO parent_complaint (complaint_id, user_id, complainttype, complaintdetails, dateofoccurrence, attachments) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;",
      [
        newComplaintId,
        userId,
        complaintType,
        complaintDetails,
        validDateOfOccurrence ? dateOfOccurrence : null,
        attachments,
      ]
    );

    return res.json(newComplaint.rows[0]);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

const viewUserComplaints = async (req, res) => {
  try {
    const userId = req.params.userId;

    const complaints = await pool.query(
      `SELECT pc.*, cs.status
      FROM parent_complaint pc
      LEFT JOIN complaint_status cs ON pc.complaint_id = cs.complaint_id
      WHERE pc.user_id = $1`,
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
