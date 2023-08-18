const pool = require("../../dbConnection");

//parent give feedback function -> post
const addFeedback = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { feedback_msg, currentValue } = req.body;

    //genarate feedback id
    const lastFeedbackData = await pool.query(
      "SELECT * FROM driver_feedback ORDER BY feedback_id DESC LIMIT 1"
    );
    const lastFeedbackId = lastFeedbackData.rows[0]?.feedback_id || "DFB000"; // Default to PR0000 if no user_id found

    const numericPart = parseInt(lastFeedbackId.replace("DFB", ""), 10); // Extract numeric part and convert to integer
    const newNumericPart = numericPart + 1;
    const newFeedbackId = `DFB${newNumericPart.toString().padStart(3, "0")}`; // Generate new user ID

    //Insert into db
    const newFeedback = await pool.query(
      "INSERT INTO driver_feedback (feedback_id, feedback, rating, sender_id) VALUES ($1,$2,$3, $4) RETURNING * ",
      [newFeedbackId, feedback_msg, currentValue, userId]
    );
    return res.json(newFeedback.rows[0]);
  } catch (err) {
    console.error(err.massage);
    res.status(500).send("Server Error");
  }
};

const addEdugoFeedback = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { edugo_feedback_msg, currentValue2  } = req.body;

    //genarate feedback id
    const lastEdugoFeedbackData = await pool.query(
      "SELECT * FROM edugo_feedback ORDER BY feedback_id DESC LIMIT 1"
    );
    const lastEdugoFeedbackId =
    lastEdugoFeedbackData.rows[0]?.feedback_id || "EFB000"; // Default to DFB000 if no user_id found

    const numericPart2 = parseInt(lastEdugoFeedbackId.replace("EFB", ""), 10); // Extract numeric part and convert to integer
    const newNumericPart2 = numericPart2 + 1;
    const newEdugoFeedbackId = `EFB${newNumericPart2
      .toString()
      .padStart(3, "0")}`; // Generate new user ID

    //Insert into db
    const newEdugoFeedback = await pool.query(
      "INSERT INTO edugo_feedback (feedback_id, feedback,rating, sender_id) VALUES ($1,$2,$3,$4) RETURNING * ",
      [newEdugoFeedbackId, edugo_feedback_msg,currentValue2, userId]
    );
    return res.json(newEdugoFeedback.rows[0]);
  } catch (err) {
    console.error(err.massage);
    res.status(500).send("Server Error");
  }
};

module.exports = { addFeedback,addEdugoFeedback  };
