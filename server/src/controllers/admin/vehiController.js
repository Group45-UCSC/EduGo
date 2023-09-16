const pool = require("../../dbConnection");

// dashboard vehicle count
const vehiCount = async (req, res) => {

  try{
  //db query
  const vehiCountData = await pool.query(
    "SELECT COUNT(*) FROM vehicle",
  );

  return res.json(vehiCountData.rows);
  } catch (err) {
  console.error(err.message);
  return res.status(500).send("Server Error");
}
};

// dashboard vehicle condition count
const conditionCount = async (req, res) => {

  try{
  //db query
  const conditionData = await pool.query(
    "SELECT COUNT(*) FROM check_vehicle_condition",
  );

  return res.json(conditionData.rows);
  } catch (err) {
  console.error(err.message);
  return res.status(500).send("Server Error");
}
};

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
  
  module.exports = { conditionCount, vehiCount, vehiList };