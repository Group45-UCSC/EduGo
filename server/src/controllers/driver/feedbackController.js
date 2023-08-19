//db connection
const pool = require("../../dbConnection");

//driver give feedback function -> POST
const addFeedback = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { feedback_msg, currentValue } = req.body;

    //generate feedback Id

    const lastFeedbackData = await pool.query(
      "SELECT * FROM edugo_feedback ORDER BY feedback_id DESC LIMIT 1"
    );

    const lastFeedbackId = lastFeedbackData.rows[0]?.feedback_id || "EFB000";
    const numericPart = parseInt(lastFeedbackId.replace("EFB", ""), 10); // Extract numeric part and convert to integer
    const newNumericPart = numericPart + 1;
    const newFeedbackId = `EFB${newNumericPart.toString().padStart(3, "0")}`; // Generate new vehicle ID

    //insert into database
    const newFeedback = await pool.query(
      "INSERT INTO edugo_feedback (feedback_id,feedback,rating,sender_id) VALUES ($1,$2,$3,$4) RETURNING * ",
      [newFeedbackId, feedback_msg, currentValue, userId]
    );

    return res.json(newFeedback.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//view driver reviews -> GET method
const viewFeedback = async (req, res) => {
  try {
    const userId = req.params.userId;

    //db query
    const reviewsData = await pool.query(
      "SELECT * FROM driver_feedback WHERE driver_id =  '" + userId + "'"
    );

    return res.json(reviewsData.rows)
    
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

module.exports = { addFeedback, viewFeedback };
