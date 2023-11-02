const pool = require("../../dbConnection");

//view all rides function -> GET
const viewProfileDetails = async(req, res) => {
  try {
    const userId =req.params.userId;
    console.log(`userId: ${userId}`); 
    const query = await pool.query(
        `SELECT * from registered_users WHERE user_id = $1`,[userId]
    );
    const data = query.rows
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error retrieving data" });
  }
};

module.exports = { viewProfileDetails };