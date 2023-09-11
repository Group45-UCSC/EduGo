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

    // console.log(childrenData.rows);
    return res.json(childrenData.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//view child details for children page -> GET method
const viewChildChildren = async (req, res) => {
  try {
    const userId = req.params.userId;

    //db query
    const childrenData = await pool.query(
      "SELECT * FROM children WHERE parent_id = $1 ORDER BY child_id ASC",
      [userId]
    );
    
    // const childrenData = await pool.query(
    //   "SELECT rr.request_status, c.* FROM ride_request rr RIGHT JOIN children c ON rr.child_id = c.child_id WHERE C.parent_id = '"+userId+"'"
    // );

    return res.json(childrenData.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//Add child 

const addChildren = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { childname, pickupLocation, schoolName, pickupTime, schoolEndTime } = req.body;

    // Generate child id
    const lastChildData = await pool.query(
      "SELECT * FROM children ORDER BY child_id DESC LIMIT 1"
    );

    const lastChildId = lastChildData.rows[0]?.child_id || "CH0000"; // Default to CH0000 if no child_id found

    const numericPart = parseInt(lastChildId.replace("CH", ""), 10); // Extract numeric part and convert to an integer
    const newNumericPart = numericPart + 1;
    const newChildId = `CH${newNumericPart.toString().padStart(5, "0")}`; // Generate a new child ID

    // Convert pickupTime and schoolEndTime to valid timestamp values
    const currentTime = new Date(); // Get the current date and time
    const pickupTimeParts = pickupTime.split(":");
    const schoolEndTimeParts = schoolEndTime.split(":");
    const pickupTimestamp = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      parseInt(pickupTimeParts[0]), // Hours
      parseInt(pickupTimeParts[1]), // Minutes
      0, // Seconds
    );

    const schoolEndTimeTimestamp = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      parseInt(schoolEndTimeParts[0]), // Hours
      parseInt(schoolEndTimeParts[1]), // Minutes
      0, // Seconds
    );

    const newChild = await pool.query(
      "INSERT INTO children (child_id, parent_id, school_name, pickup_location, child_name,ride_status, pickup_time, school_end_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [newChildId, userId, schoolName, pickupLocation, childname,'notreg', pickupTimestamp, schoolEndTimeTimestamp]
    );

    return res.json(newChild.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
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
    const { ride_id, driver_id, child_location, school, child_id, selectedShift } = req.body;
    
    //genarate request id
    const lastRequestData = await pool.query(
      "SELECT * FROM ride_request ORDER BY request_id DESC LIMIT 1"
    );

    //Creat feedback id
    const lastRequestId = lastRequestData.rows[0]?.request_id || "REQ000"; // Default to PR0000 if no user_id found

    const numericPart = parseInt(lastRequestId.replace("REQ", ""), 10); // Extract numeric part and convert to integer
    const newNumericPart = numericPart + 1;
    const newRequestId = `REQ${newNumericPart.toString().padStart(3, "0")}`; // Generate new user ID
    // console.log(newRequestId);

    //Insert into ride request table
    const newRideRequest = await pool.query(
      "INSERT INTO ride_request (request_id,pickup_location, school_name, ride_id, request_status, driver_id, child_id , parent_id, ride_shift_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING * ",
      [newRequestId, child_location, school, ride_id, 'pending', driver_id, child_id, userId, selectedShift]
    );

    //Create notification id
    const lastNotifyData = await pool.query(
      "SELECT * FROM notification ORDER BY notification_id DESC LIMIT 1"
    );

    const lastNotifiId = lastNotifyData.rows[0]?.notification_id || "NOT000"; // Default to NOT000 if no user_id found

    const numericPartNotify = parseInt(lastNotifiId.replace("NOT", ""), 10); // Extract numeric part and convert to integer
    const newNumericPartNotifi = numericPartNotify + 1;
    const newNotifiId = `NOT${newNumericPartNotifi.toString().padStart(3, "0")}`; // Generate new Notification ID

    const newNotification = await pool.query(
      "INSERT INTO notification (notification_id,sender_id, receiver_id, message, type, status ) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ",
      [newNotifiId, userId, driver_id, 'ride request', 'parent', 'delivered']
    );

    //Update children table with request_status
    const updateChildrenQuery = `
        UPDATE children
        SET request_status = 'pending', ride_shift_type = $1
        WHERE child_id = $2
      `;

    await pool.query(updateChildrenQuery, [selectedShift,child_id]);

    //Prepare the response object including both newRideRequest and newNotification
    const response = {
      newRideRequest: newRideRequest.rows[0],
      newNotification: newNotification.rows[0],
    };

    return res.json(response);
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
  addChildren
};
