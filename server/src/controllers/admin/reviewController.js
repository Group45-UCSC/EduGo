const pool = require("../../dbConnection");

//view vehicle list in vehicles and drivers page
const reviewList = async (req, res) => {

    try{
    //db query
    const reviewData = await pool.query(
      "SELECT * FROM rating r INNER JOIN registered_users u ON r.parent_id = u.user_id INNER JOIN vehicle v ON v.driver_id = r.driver_id",
    );
  
    return res.json(reviewData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };
  
  module.exports = { reviewList };