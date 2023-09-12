const pool = require("../../dbConnection");

//view vehicle list in vehicles and drivers page
const driverList = async (req, res) => {

    try{
    //db query
    const driverData = await pool.query(
      "SELECT d.user_id, v.vehicle_no, u.user_name, u.address FROM driver d INNER JOIN vehicle v ON d.user_id = v.driver_id INNER JOIN registered_users u ON d.user_id = u.user_id",
    );
  
    return res.json(driverData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };
  
  module.exports = { driverList };