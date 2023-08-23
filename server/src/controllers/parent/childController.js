//db connection
const pool = require("../../dbConnection");

//view child details for dashboard -> GET method
const viewChildDashboard = async (req, res) => {
  try {
    const userId = req.params.userId;

    //db query
    const childrenData = await pool.query(
      "SELECT * FROM children WHERE parent_id =  '" + userId + "'"
    );

    return res.json(childrenData.rows)
    
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//view child details for dashboard -> GET method
const viewChildChildren = async (req, res) => {
  try {
    const userId = req.params.userId;

    //db query
    const childrenData = await pool.query(
      "SELECT * FROM children WHERE parent_id =  '" + userId + "'"
    );

    return res.json(childrenData.rows)
    
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

// view vehivel list in addNewRide page
const ViewVehicle = async (req, res) => {
  try {
    const userId = req.params.userId;

    //db query
    const vehicleData = await pool.query(
      "SELECT * FROM vehicle INNER JOIN school_ride ON vehicle.vehicle_id = school_ride.vehicle_id "
    );

    return res.json(vehicleData.rows)
    
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

// view school list in viewVehicle page
const viewSchool = async (req, res) => {
  try {
    const rideId = req.params.rideId;

    //db query
    const viewSchool = await pool.query(
      "SELECT * FROM reaching_school WHERE ride_id =  '" + rideId + "'"
    );
    return res.json(viewSchool.rows)

  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

module.exports = { viewChildDashboard, viewChildChildren, ViewVehicle, viewSchool}