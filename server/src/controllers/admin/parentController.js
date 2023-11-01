const pool = require("../../dbConnection");

//view vehicle list in vehicles and drivers page
const parentList = async (req, res) => {

    try{
    //db query
    const parentData = await pool.query(
      "SELECT * FROM parent p INNER JOIN registered_users u ON p.user_id = u.user_id",
    );
  
    return res.json(parentData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };
  
  module.exports = { parentList };