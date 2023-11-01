//db connection
const pool = require("../../dbConnection");

const rp = require("request-promise"); //?

const mapQuestApiKey = "WD3aHbCMYGFejjsr97UDw5bWxmC9IoEX"; //?

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

//next ride page, get children location details to the map
const GetAllChildrentoMap = async (req, res) => {
  //?
  // console.log("GET request  received");
  const selectQuery =
    "SELECT pickup_location, ST_Y(location::geometry) AS latitude, ST_X(location::geometry) AS longitude FROM children";
  addRideRequest;
  pool.query(selectQuery, (err, result) => {
    if (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Server error" });
      return;
    }

    // Check if the result is an array (result.rows)
    if (!Array.isArray(result.rows)) {
      console.error("Query result is not an array:", result);
      res.status(500).json({ error: "Invalid query result" });
      return;
    }

    const storesWithLatLng = result.rows.map((store) => {
      return {
        address: store.pickup_location,
        latitude: store.latitude,
        longitude: store.longitude,
      };
    });

    res.status(200).json({
      success: true,
      count: storesWithLatLng.length,
      data: storesWithLatLng,
    });
  });
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

// //Add child

// const addChildren = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const { childname, pickupLocation, schoolName, pickupTime, schoolEndTime } = req.body;

//     // Generate child id
//     const lastChildData = await pool.query(
//       "SELECT * FROM children ORDER BY child_id DESC LIMIT 1"
//     );

//     const lastChildId = lastChildData.rows[0]?.child_id || "CH0000"; // Default to CH0000 if no child_id found

//     const numericPart = parseInt(lastChildId.replace("CH", ""), 10); // Extract numeric part and convert to an integer
//     const newNumericPart = numericPart + 1;
//     const newChildId = `CH${newNumericPart.toString().padStart(5, "0")}`; // Generate a new child ID

//     // Convert pickupTime and schoolEndTime to valid timestamp values
//     const currentTime = new Date(); // Get the current date and time
//     const pickupTimeParts = pickupTime.split(":");
//     const schoolEndTimeParts = schoolEndTime.split(":");
//     const pickupTimestamp = new Date(
//       currentTime.getFullYear(),
//       currentTime.getMonth(),
//       currentTime.getDate(),
//       parseInt(pickupTimeParts[0]), // Hours
//       parseInt(pickupTimeParts[1]), // Minutes
//       0, // Seconds
//     );

//     const schoolEndTimeTimestamp = new Date(
//       currentTime.getFullYear(),
//       currentTime.getMonth(),
//       currentTime.getDate(),
//       parseInt(schoolEndTimeParts[0]), // Hours
//       parseInt(schoolEndTimeParts[1]), // Minutes
//       0, // Seconds
//     );

//     const newChild = await pool.query(
//       "INSERT INTO children (child_id, parent_id, school_name, pickup_location, child_name,ride_status, pickup_time, school_end_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
//       [newChildId, userId, schoolName, pickupLocation, childname,'notreg', pickupTimestamp, schoolEndTimeTimestamp]
//     );

//     return res.json(newChild.rows[0]);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// };

//Add child

const addChildren = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { childname, pickupLocation, schoolName,pickupAddress } = req.body;
    // console.log(req.body);

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
    // const pickupTimeParts = pickupTime.split(":");            ?
    // const schoolEndTimeParts = schoolEndTime.split(":");  ?
    // const pickupTimestamp = new Date(
    //   currentTime.getFullYear(),
    //   currentTime.getMonth(),
    //   currentTime.getDate(),
    //   parseInt(pickupTimeParts[0]), // Hours       ?
    //   parseInt(pickupTimeParts[1]), // Minutes
    //   0, // Seconds
    // );

    // const schoolEndTimeTimestamp = new Date(           ?
    //   currentTime.getFullYear(),
    //   currentTime.getMonth(),
    //   currentTime.getDate(),
    //   parseInt(schoolEndTimeParts[0]), // Hours
    //   parseInt(schoolEndTimeParts[1]), // Minutes
    //   0, // Seconds
    // );

    // Make a geocoding request to MapQuest API
  
    // const geocodeResponse = await rp({
    //   //?
    //   uri: `https://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestApiKey}`,
    //   qs: {
    //     location: pickupLocation,
    //   },
    //   json: true,
    // });
    // console.log(geocodeResponse);

    // Check if the geocoding response contains results
    // if (!geocodeResponse.results || geocodeResponse.results.length === 0) {
    //   return res.status(400).json({ error: "Invalid address" });
    // }

    // Extract latitude, longitude, and formatted address from the first result
    // const firstResult = geocodeResponse.results[0];
    const { lat, lng } = pickupLocation
    // const formattedaddress =
    //   firstResult.locations[0].street || firstResult.locations[0].adminArea5;
    // console.log(lat);
    // console.log(lng);
    // console.log(formattedaddress);

    const newChild = await pool.query(
      "INSERT INTO children (child_id, parent_id, school_name, pickup_location, location, formattedaddress, child_name,ride_status) VALUES ($1, $2, $3, $4, ST_GeomFromText($5), $6, $7, $8) RETURNING *",
      [
        newChildId,
        userId,
        schoolName,
        pickupAddress,
        `POINT(${lng} ${lat})`,
        pickupAddress,
        childname,
        "notreg",
      ]
    );

    return res.status(200).json({
      success: true,
      data: {
        address: undefined,
        location: { type: "Point", coordinates: [lng, lat] },
        pickupAddress,
        latitude: lat,
        longitude: lng,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  } //?
};

// view vehicle list in addNewRide page
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
// const addRideRequest = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const {
//       ride_id,
//       driver_id,
//       child_location,
//       school,
//       child_id,
//       selectedShift,
//     } = req.body;

//     //genarate request id
//     const lastRequestData = await pool.query(
//       "SELECT * FROM ride_request ORDER BY request_id DESC LIMIT 1"
//     );

//     //Creat feedback id
//     const lastRequestId = lastRequestData.rows[0]?.request_id || "REQ000"; // Default to PR0000 if no user_id found

//     const numericPart = parseInt(lastRequestId.replace("REQ", ""), 10); // Extract numeric part and convert to integer
//     const newNumericPart = numericPart + 1;
//     const newRequestId = `REQ${newNumericPart.toString().padStart(3, "0")}`; // Generate new user ID
//     // console.log(newRequestId);

//     // Make a geocoding request to MapQuest API
//     const geocodeResponse = await rp({
//       //?
//       uri: "https://www.mapquestapi.com/geocoding/v1/address",
//       qs: {
//         key: mapQuestApiKey,
//         location: child_location,
//       },
//       json: true,
//     });

//     // Check if the geocoding response contains results
//     if (!geocodeResponse.results || geocodeResponse.results.length === 0) {
//       return res.status(400).json({ error: "Invalid address" });
//     }

//     // Extract latitude, longitude, and formatted address from the first result
//     const firstResult = geocodeResponse.results[0];
//     const { lat, lng } = firstResult.locations[0].latLng;
//     const formattedaddress =
//       firstResult.locations[0].street || firstResult.locations[0].adminArea5;
//     console.log(lat);
//     console.log(lng);
//     console.log(formattedaddress);

//     //Insert into ride request table
//     const newRideRequest = await pool.query(
//       "INSERT INTO ride_request (request_id,pickup_location,location, formattedaddress, school_name, ride_id, request_status, driver_id, child_id , parent_id, ride_shift_type) VALUES ($1,$2,ST_GeomFromText($3),$4,$5,$6,$7,$8,$9,$10,$11) RETURNING * ",
//       [
//         newRequestId,
//         child_location,
//         `POINT(${lng} ${lat})`,
//         formattedaddress,
//         school,
//         ride_id,
//         "pending",
//         driver_id,
//         child_id,
//         userId,
//         selectedShift,
//       ]
//     );

//     //Create notification id
//     const lastNotifyData = await pool.query(
//       "SELECT * FROM notification ORDER BY notification_id DESC LIMIT 1"
//     );

//     const lastNotifiId = lastNotifyData.rows[0]?.notification_id || "NOT000"; // Default to NOT000 if no user_id found

//     const numericPartNotify = parseInt(lastNotifiId.replace("NOT", ""), 10); // Extract numeric part and convert to integer
//     const newNumericPartNotifi = numericPartNotify + 1;
//     const newNotifiId = `NOT${newNumericPartNotifi
//       .toString()
//       .padStart(3, "0")}`; // Generate new Notification ID

//     const newNotification = await pool.query(
//       "INSERT INTO notification (notification_id,sender_id, receiver_id, message, type, status ) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ",
//       [newNotifiId, userId, driver_id, "ride request", "parent", "delivered"]
//     );

//     //Update children table with request_status
//     const updateChildrenQuery = `
//         UPDATE children
//         SET request_status = 'pending', ride_shift_type = $1
//         WHERE child_id = $2
//       `;

//     await pool.query(updateChildrenQuery, [selectedShift, child_id]);

//     //Prepare the response object including both newRideRequest and newNotification
//     const response = {
//       newRideRequest: newRideRequest.rows[0],
//       newNotification: newNotification.rows[0],
//       address: undefined,
//       location: { type: "Point", coordinates: [lng, lat] },
//       formattedaddress,
//       latitude: lat,
//       longitude: lng,
//     };

//     return res.status(200).json({
//       data: {
//         address: undefined,
//         location: { type: "Point", coordinates: [lng, lat] },
//         formattedaddress,
//         latitude: lat,
//         longitude: lng,
//       },
//     });
//   } catch (err) {
//     console.error(err.massage);
//     res.status(500).send("Server Error");
//   }
// };

// const addRideRequest = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const { ride_id, driver_id, child_location, school, child_id, selectedShift } = req.body;
    
//     //genarate request id
//     const lastRequestData = await pool.query(
//       "SELECT * FROM ride_request ORDER BY request_id DESC LIMIT 1"
//     );

//     //Creat feedback id
//     const lastRequestId = lastRequestData.rows[0]?.request_id || "REQ000"; // Default to PR0000 if no user_id found

//     const numericPart = parseInt(lastRequestId.replace("REQ", ""), 10); // Extract numeric part and convert to integer
//     const newNumericPart = numericPart + 1;
//     const newRequestId = `REQ${newNumericPart.toString().padStart(3, "0")}`; // Generate new user ID
//     // console.log(newRequestId);

//     // Make a geocoding request to MapQuest API
//     const geocodeResponse = await rp({
//       //?
//       uri: "https://www.mapquestapi.com/geocoding/v1/address",
//       qs: {
//         key: mapQuestApiKey,
//         location: child_location,
//       },
//       json: true,
//     });

//     // Check if the geocoding response contains results
//     if (!geocodeResponse.results || geocodeResponse.results.length === 0) {
//       return res.status(400).json({ error: "Invalid address" });
//     }

//     // Extract latitude, longitude, and formatted address from the first result
//     const firstResult = geocodeResponse.results[0];
//     const { lat, lng } = firstResult.locations[0].latLng;
//     const formattedaddress = firstResult.locations[0].street || firstResult.locations[0].adminArea5;
//     console.log(lat);
//     console.log(lng);
//     console.log(formattedaddress);

//     //Insert into ride request table
//     const newRideRequest = await pool.query(
//       "INSERT INTO ride_request (request_id,pickup_location,location, formattedaddress, school_name, ride_id, request_status, driver_id, child_id , parent_id, ride_shift_type) VALUES ($1,$2,ST_GeomFromText($3),$4,$5,$6,$7,$8,$9,$10,$11) RETURNING * ",
//       [
//         newRequestId,
//         child_location,
//         `POINT(${lng} ${lat})`,
//         formattedaddress,
//         school,
//         ride_id,
//         "pending",
//         driver_id,
//         child_id,
//         userId,
//         selectedShift,
//       ]
//     );

//     //Create notification id
//     const lastNotifyData = await pool.query(
//       "SELECT * FROM notification ORDER BY notification_id DESC LIMIT 1"
//     );

//     const lastNotifiId = lastNotifyData.rows[0]?.notification_id || "NOT000"; // Default to NOT000 if no user_id found

//     const numericPartNotify = parseInt(lastNotifiId.replace("NOT", ""), 10); // Extract numeric part and convert to integer
//     const newNumericPartNotifi = numericPartNotify + 1;
//     const newNotifiId = `NOT${newNumericPartNotifi.toString().padStart(3, "0")}`; // Generate new Notification ID

//     const newNotification = await pool.query(
//       "INSERT INTO notification (notification_id,sender_id, receiver_id, message, type, status ) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ",
//       [newNotifiId, userId, driver_id, 'ride request', 'parent', 'delivered']
//     );

//     //Update children table with request_status
//     const updateChildrenQuery = `
//         UPDATE children
//         SET request_status = 'pending', ride_shift_type = $1
//         WHERE child_id = $2
//       `;

//     await pool.query(updateChildrenQuery, [selectedShift,child_id]);

//     //Prepare the response object including both newRideRequest and newNotification
//     const response = {
//       newRideRequest: newRideRequest.rows[0],
//       newNotification: newNotification.rows[0],
//       address: undefined,
//       location: { type: "Point", coordinates: [lng, lat] },
//       formattedaddress,
//       latitude: lat,
//       longitude: lng,
//     };

//     return res.status(200).json({
//       data: {
//         address: undefined,
//         location: { type: "Point", coordinates: [lng, lat] },
//         formattedaddress,
//         latitude: lat,
//         longitude: lng,
//       },
//     });
    
//   } catch (err) {
//     console.error(err.massage);
//     res.status(500).send("Server Error");
//   }
// };

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

    // Make a geocoding request to MapQuest API
    const geocodeResponse = await rp({
      //?
      uri: "https://www.mapquestapi.com/geocoding/v1/address",
      qs: {
        key: mapQuestApiKey,
        location: child_location,
      },
      json: true,
    });

    // Check if the geocoding response contains results
    if (!geocodeResponse.results || geocodeResponse.results.length === 0) {
      return res.status(400).json({ error: "Invalid address" });
    }

    // Extract latitude, longitude, and formatted address from the first result
    const firstResult = geocodeResponse.results[0];
    const { lat, lng } = firstResult.locations[0].latLng;
    const formattedaddress = firstResult.locations[0].street || firstResult.locations[0].adminArea5;
    console.log(lat);
    console.log(lng);
    console.log(formattedaddress);

    //Insert into ride request table
    const newRideRequest = await pool.query(
      "INSERT INTO ride_request (request_id,pickup_location,location, formattedaddress, school_name, ride_id, request_status, driver_id, child_id , parent_id, ride_shift_type) VALUES ($1,$2,ST_GeomFromText($3),$4,$5,$6,$7,$8,$9,$10,$11) RETURNING * ",
      [
        newRequestId,
        child_location,
        `POINT(${lng} ${lat})`,
        formattedaddress,
        school,
        ride_id,
        "pending",
        driver_id,
        child_id,
        userId,
        selectedShift,
      ]
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
      address: undefined,
      location: { type: "Point", coordinates: [lng, lat] },
      formattedaddress,
      latitude: lat,
      longitude: lng,
    };

    return res.status(200).json({
      data: {
        address: undefined,
        location: { type: "Point", coordinates: [lng, lat] },
        formattedaddress,
        latitude: lat,
        longitude: lng,
      },
    });
    
  } catch (err) {
    console.error(err.massage);
    res.status(500).send("Server Error");
  }
};

// // add ride request in view vehicle page
// const addRideRequest = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const { ride_id, driver_id, child_location, school, child_id, selectedShift } = req.body;

//     //genarate request id
//     const lastRequestData = await pool.query(
//       "SELECT * FROM ride_request ORDER BY request_id DESC LIMIT 1"
//     );

//     //Creat feedback id
//     const lastRequestId = lastRequestData.rows[0]?.request_id || "REQ000"; // Default to PR0000 if no user_id found

//     const numericPart = parseInt(lastRequestId.replace("REQ", ""), 10); // Extract numeric part and convert to integer
//     const newNumericPart = numericPart + 1;
//     const newRequestId = `REQ${newNumericPart.toString().padStart(3, "0")}`; // Generate new user ID
//     // console.log(newRequestId);

//     //Insert into ride request table
//     const newRideRequest = await pool.query(
//       "INSERT INTO ride_request (request_id,pickup_location, school_name, ride_id, request_status, driver_id, child_id , parent_id, ride_shift_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING * ",
//       [newRequestId, child_location, school, ride_id, 'pending', driver_id, child_id, userId, selectedShift]
//     );

//     //Create notification id
//     const lastNotifyData = await pool.query(
//       "SELECT * FROM notification ORDER BY notification_id DESC LIMIT 1"
//     );

//     const lastNotifiId = lastNotifyData.rows[0]?.notification_id || "NOT000"; // Default to NOT000 if no user_id found

//     const numericPartNotify = parseInt(lastNotifiId.replace("NOT", ""), 10); // Extract numeric part and convert to integer
//     const newNumericPartNotifi = numericPartNotify + 1;
//     const newNotifiId = `NOT${newNumericPartNotifi.toString().padStart(3, "0")}`; // Generate new Notification ID

//     const newNotification = await pool.query(
//       "INSERT INTO notification (notification_id,sender_id, receiver_id, message, type, status ) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ",
//       [newNotifiId, userId, driver_id, 'ride request', 'parent', 'delivered']
//     );

//     //Update children table with request_status
//     const updateChildrenQuery = `
//         UPDATE children
//         SET request_status = 'pending', ride_shift_type = $1
//         WHERE child_id = $2
//       `;

//     await pool.query(updateChildrenQuery, [selectedShift,child_id]);

//     //Prepare the response object including both newRideRequest and newNotification
//     const response = {
//       newRideRequest: newRideRequest.rows[0],
//       newNotification: newNotification.rows[0],
//     };

//     return res.json(response);
//   } catch (err) {
//     console.error(err.massage);
//     res.status(500).send("Server Error");
//   }
// };

// module.exports = {
//   viewChildDashboard,
//   viewChildChildren,
//   ViewVehicle,
//   viewSchool,
//   viewDriverReview,
//   addRideRequest,
//   addChildren
// };

//uuuuuuuu

//db connection

module.exports = {
  viewChildDashboard,
  viewChildChildren,
  ViewVehicle,
  viewSchool,
  viewDriverReview,
  addRideRequest,
  addChildren,
  GetAllChildrentoMap,
};
