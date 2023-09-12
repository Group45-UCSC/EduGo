const pool = require("../../dbConnection");

//view vehicle list in vehicles and drivers page
const vehiList = async (req, res) => {

    try{
    //db query
    const vehiData = await pool.query(
      "SELECT v.vehicle_id, v.vehicle_no, u.user_name, u.contact_number, u.address FROM vehicle v INNER JOIN registered_users u ON u.user_id = v.driver_id",
    );
  
    return res.json(vehiData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };
  
  module.exports = { vehiList };