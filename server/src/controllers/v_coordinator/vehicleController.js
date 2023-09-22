const pool = require("../../dbConnection");

//view all rvechicle list
const vehicleList = async (req, res) => {

  try {
    //db query
    const vehicleData = await pool.query(
      "SELECT vehicle.vehicle_id, vehicle.vehicle_type, vehicle.vehicle_model, vehicle.vehicle_no, registered_users.contact_number FROM vehicle INNER JOIN registered_users ON vehicle.driver_id = registered_users.user_id",
    );

  return res.json(vehicleData.rows);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};

module.exports = { vehicleList };