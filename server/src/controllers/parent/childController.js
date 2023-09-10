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

    return res.json(childrenData.rows);
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

    return res.json(childrenData.rows);
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

    return res.json(vehicleData.rows);
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
    return res.json(viewSchool.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

// view dirver reviews in view vehicle page
const viewDriverReview = async (req, res) => {
  try {
    const driver_id = req.params.driver_id;

    //db query
    const reviewData = await pool.query(
      "SELECT feedback,rating FROM driver_feedback WHERE driver_id =  '" +
        driver_id +
        "'"
    );

    return res.json(reviewData.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

// add ride request in view vehicle page
const addRideRequest = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { ride_id, driver_id, child_location, school, child_id } = req.body;

    //genarate request id
    const lastRequestData = await pool.query(
      "SELECT * FROM ride_request ORDER BY request_id DESC LIMIT 1"
    );

    //Creat feedback id
    const lastRequestId = lastRequestData.rows[0]?.request_id || "REQ000"; // Default to PR0000 if no user_id found

    const numericPart = parseInt(lastRequestId.replace("REQ", ""), 10); // Extract numeric part and convert to integer
    const newNumericPart = numericPart + 1;
    const newRequestId = `REQ${newNumericPart.toString().padStart(3, "0")}`; // Generate new user ID

    //Insert into db
    const newRideRequest = await pool.query(
      "INSERT INTO ride_request (request_id,location, school, driver_id, parent_id, ride_id) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ",
      [newRequestId, child_location, school, driver_id, userId, ride_id]
    );

    // Update children table with ride_id and status
    const updateChildrenQuery = `
        UPDATE children
        SET ride_id = $1, status = 'notride'
        WHERE child_id = $2
      `;

    await pool.query(updateChildrenQuery, [ride_id, child_id]);

    return res.json(newRideRequest.rows[0]);
  } catch (err) {
    console.error(err.massage);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  viewChildDashboard,
  viewChildChildren,
  ViewVehicle,
  viewSchool,
  viewDriverReview,
  addRideRequest,
};
