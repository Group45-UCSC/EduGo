const pool = require("../../dbConnection");

//view all vechicle list
const vehicleList = async (req, res) => {

  try {
    //db query
    const vehicleData = await pool.query(
      "SELECT * FROM vehicle v INNER JOIN registered_users u ON v.driver_id = u.user_id",
    );

  return res.json(vehicleData.rows);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};


//view relavant details in vehicle details container => page vehicle details
const vehicledetails = async (req, res) => {

  try {
    //db query
    const vehicleDatas = await pool.query(
      "SELECT vehicle.vehicle_id , vehicle.vehicle_type, vehicle.vehicle_model, vehicle.vehicle_no, vehicle.make, vehicle.manufacture_year, vehicle.engine_no, vehicle.chassis.no, school_ride.ride_type, school_ride.location_morning_ride, school_ride.location_noon_ride  FROM vehicle INNER JOIN school_ride ON vehicle.vehicle_id = school_ride.vehicle_id",
    );

  return res.json(vehicleDatas.rows);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};


module.exports = { vehicleList, vehicledetails };