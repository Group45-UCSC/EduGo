const pool = require("../../dbConnection");

//view emergency list
const curEmergencyList = async (req, res) => {

    try{
    //db query
    const curEmgData = await pool.query(
      "SELECT * FROM emergency e INNER JOIN vehicle v ON e.vehicle_no = v.vehicle_id INNER JOIN registered_users r ON r.user_id = v.driver_id WHERE status='pending'",
    );
  
    return res.json(curEmgData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };


  const doneEmergencyList = async (req, res) => {

    try{
    //db query
    const doneEmgData = await pool.query(
      "SELECT * FROM emergency e INNER JOIN vehicle v ON e.vehicle_no = v.vehicle_id INNER JOIN registered_users r ON r.user_id = v.driver_id WHERE status='completed'",
    );
  
    return res.json(doneEmgData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };
  
  module.exports = { curEmergencyList, doneEmergencyList };