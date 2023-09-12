const pool = require("../../dbConnection");

//view vehicle list in vehicles and drivers page
const vehiList = async (req, res) => {

    try{
    //db query
    const vehiData = await pool.query(
      "SELECT * FROM vehicle",
    );
  
    return res.json(vehiData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };
  
  module.exports = { vehiList };