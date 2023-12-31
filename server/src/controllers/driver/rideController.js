//db connection
const pool = require("../../dbConnection");

//to get ride details for ride page -> GET method
const viewRideDetails = async (req, res) => {
  try {
    const userId = req.params.userId;

    //to get all school ride data
    const rideData = await pool.query(
      "SELECT * FROM school_ride WHERE driver_id = '" + userId + "' "
    );

    // console.log(rideData.rows);

    //to get all ride school data
    const rideSchoolData = await pool.query(
      "SELECT school.school_name, school.location,school.school_id FROM school INNER JOIN reaching_school ON school.school_id= reaching_school.school_id WHERE reaching_school.driver_id = '" +
        userId +
        "' ORDER BY school.school_id ASC "
    );
    // console.log(rideSchoolData.rows);

    //to get all ride children data
    const rideChildrenData = await pool.query(
      "SELECT * FROM children WHERE driver_id = '" +
        userId +
        "' ORDER BY child_id ASC  "
    );

    // console.log(rideChildrenData.rows);

    return res.json({
      rideDataList: rideData.rows,
      schoolList: rideSchoolData.rows,
      childrenList: rideChildrenData.rows,
    });
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//---------------------------------Ride Requests Handling------------------------------------

//view ride requests -> GET method
const viewRideRequests = async (req, res) => {
  //?
  try {
    const userId = req.params.userId;

    //get ride request data
    const combinedQuery = `
  SELECT
    ride_request.request_id,
    ride_request.pickup_location,
    ride_request.school_name,
    ride_request.parent_id,
    ride_request.date,
    ride_request.ride_id,
    ride_request.request_status,
    ride_request.child_id,
    ride_request.ride_shift_type,
    children.school_id,
    children.child_name,
    ST_Y(ride_request.location::geometry) AS latitude,
    ST_X(ride_request.location::geometry) AS longitude
  FROM ride_request
  INNER JOIN children ON ride_request.child_id = children.child_id
  WHERE ride_request.driver_id = $1
  AND ride_request.request_status = 'pending'
  ORDER BY ride_request.request_id ASC
`;

    const combinedData = await pool.query(combinedQuery, [userId]);

    console.log(combinedData.rows);

    return res.json(combinedData.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//reject ride request  -> PUT method
const rejectRideRequest = async (req, res) => {
  try {
    const childId = req.params.childId;
    const requestId = req.params.requestId;

    //update ride request table
    const result1 = await pool.query(
      " UPDATE ride_request SET request_status = 'rejected' WHERE request_id = '" +
        requestId +
        "' "
    );

    //update children table
    const result2 = await pool.query(
      " UPDATE children SET request_status = 'rejected' WHERE child_id = '" +
        childId +
        "' "
    );

    // console.log(rideData.rows);

    return res.json({
      data1: result1.rows,
      data2: result2.rows,
    });
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//check that request school is reaching or not by driver in his ride
const checkReachingSchool = async (req, res) => {
  try {
    const userId = req.params.userId;
    const schoolId = req.params.schoolId;

    const checkSchool = await pool.query(
      "SELECT * FROM reaching_school WHERE driver_id  =   '" +
        userId +
        "' AND school_id =   '" +
        schoolId +
        "' "
    );

    if (checkSchool.rows.length === 0) {
      // this school is not reachable -> can't accept
      return res.status(201).json("no");
    } else {
      return res.status(200).json("yes");
    }
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//accept ride request  -> PUT method
const acceptRideRequest = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { childId, requestId, schoolId, rideId } = req.body;

    //update ride_request table✅
    const result1 = await pool.query(
      " UPDATE ride_request SET request_status = 'accepted' WHERE request_id = '" +
        requestId +
        "' "
    );

    //update school_ride table ✅

    const childrenCount = await pool.query(
      "SELECT num_of_children FROM school_ride WHERE driver_id  =   '" +
        userId +
        "' AND ride_id =   '" +
        rideId +
        "' "
    );

    const newChildrenCount = childrenCount.rows[0].num_of_children + 1;

    const result2 = await pool.query(
      " UPDATE school_ride SET num_of_children = ' " +
        newChildrenCount +
        "' WHERE ride_id = '" +
        rideId +
        "' "
    );

    //update the children table ✅
    const result3 = await pool.query(
      " UPDATE children SET request_status = 'accepted', ride_status='notride', ride_id = $1, driver_id = $2 WHERE child_id = $3",
      [rideId, userId, childId]
    );

    //insert into the ride_children table

    // Return a success response to the frontend
    return res.status(200).json({
      message: "Ride request accepted successfully",
      results: {
        result1,
        result2,
        result3,
      },
    });
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//accept ride request  -> PUT method
const setChildRideTime = async (req, res) => {
  try {
    // const rideId = req.params.rideId;
    // const childId = req.params.childId;

    const {
      pickupTime,
      dropTime,
      pickupTime2,
      dropTime2,
      requestRideId,
      requestChildId,
    } = req.body;

    //insert into the ride_children table
    const setTime = await pool.query(
      "INSERT INTO ride_children (ride_id, child_id, pickup_time1, drop_time1, pickup_time2, drop_time2) VALUES ($1, $2, TO_TIMESTAMP($3, 'HH24:MI:SS'), TO_TIMESTAMP($4, 'HH24:MI:SS'), TO_TIMESTAMP($5, 'HH24:MI:SS'), TO_TIMESTAMP($6, 'HH24:MI:SS')) RETURNING *",
      [
        requestRideId,
        requestChildId,
        pickupTime,
        dropTime,
        pickupTime2,
        dropTime2,
      ]
    );

    //insert into notification table

    console.log(setTime.rows);

    return res.status(200).json(setTime.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//to get child details for next ride page -> GET method
const viewRideChildList = async (req, res) => {
  try {
    const userId = req.params.userId;

    const getRideId = await pool.query(
      "SELECT ride_id, num_of_children FROM school_ride WHERE driver_id  =   '" +
        userId +
        "' "
    );

    const rideId = getRideId.rows[0].ride_id;
    const numChild = getRideId.rows[0].num_of_children;
    // console.log(rideId);
    // console.log(numChild);

    // const rideId = getRideId.rows[0];
    // console.log(rideId);

    //to get all ride school data
    const rideChildrenData = await pool.query(
      "SELECT ride_children.child_id, ride_children.child_status, children.school_name, children.child_name,children.image,children.pickup_location FROM ride_children INNER JOIN children ON ride_children.child_id = children.child_id WHERE children.driver_id = '" +
        userId +
        "' AND children.request_status = 'accepted' ORDER BY children.child_id ASC "
    );

    // console.log(rideChildrenData.rows);

    return res.json({
      childDataList: rideChildrenData.rows,
      rideId: rideId,
    });
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//pick status  -> PUT method
const changePickedStatus = async (req, res) => {
  try {
    const { childId } = req.body;

    //update ride_children table
    const result1 = await pool.query(
      " UPDATE ride_children SET child_status = 'picked_up' WHERE child_id = '" +
        childId +
        "' "
    );

    // Return a success response to the frontend
    return res.status(200).json({
      message: "successfull",
    });
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//drop status  -> PUT method
const changedroppedStatus = async (req, res) => {
  try {
    const { childId } = req.body;

    //update ride_children table
    const result1 = await pool.query(
      " UPDATE ride_children SET child_status = 'dropped' WHERE child_id = '" +
        childId +
        "' "
    );

    // Return a success response to the frontend
    return res.status(200).json({
      message: "successfull",
    });
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//end status  -> PUT method
const rideEndStatus = async (req, res) => {
  try {
    const userId = req.params.userId;

    //get the ride_id of the related driver
    const getRideId = await pool.query(
      "SELECT ride_id FROM school_ride WHERE driver_id = '" + userId + "' "
    );

    const rideId = getRideId.rows[0].ride_id;

    //update ride_children table
    const result1 = await pool.query(
      " UPDATE ride_children SET child_status = 'idle' WHERE ride_id = '" +
        rideId +
        "' "
    );

    // Return a success response to the frontend
    return res.status(200).json({
      message: "successfull",
    });
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};


// MOBILE
// view ride_request
const viewMRideRequests = async (req, res) => {
  //?
  try {
    const userId = req.params.userId;

    //get ride request data
    const rideRequest = await pool.query("SELECT ride_request.pickup_location, ride_request.school_name, ride_request.parent_id, ride_request.request_status, ride_request.child_id, ride_request.ride_shift_type, children.school_id, children.child_name FROM ride_request INNER JOIN children ON ride_request.child_id = children.child_id WHERE ride_request.driver_id = '" + userId + "' AND ride_request.request_status = 'pending' ORDER BY ride_request.request_id ASC");

    return res.json(rideRequest.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};
// driver rides
const childrenCountSchool = async (req, res) => {
  try {
    const driverId = req.params.driverId;
    
    const rideChildren = await pool.query(
      "SELECT school.school_name, school.location, school.latitude, school.longitude, COUNT(children.child_id) AS children_count FROM school LEFT JOIN children ON school.school_name = children.school_name WHERE children.driver_id  =  '" + driverId + "' GROUP BY school.school_name, school.location, school.latitude, school.longitude   "
    );
    // console.log(rideChildren.rows);
      return res.json(rideChildren.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

// riding types
const ridingTimes = async (req, res) => {
  try {
    const driverId = req.params.driverId;
    
    const rideTime = await pool.query(
      "SELECT time_morning_ride, time_noon_ride FROM school_ride WHERE driver_id =  '" + driverId + "' "
    );
    // console.log(rideChildren.rows);
      return res.json(rideTime.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};


// const childrenSchool = async (req, res) => {
//   try {
//     const driverId = req.params.driverId;
    
//     const childrenName = await pool.query(
//       "SELECT children.child_name from children WHERE children.driver_id =  '" + driverId + "' "
//     );
//     // console.log(rideChildren.rows);
//       return res.json(childrenName.rows);
//   } catch (err) {
//     console.error(err.massage);
//     return res.status(500).send("Server Error");
//   }
// };

module.exports = {
  viewRideDetails,
  viewRideRequests,
  rejectRideRequest,
  checkReachingSchool,
  acceptRideRequest,
  setChildRideTime,
  viewRideChildList,
  changePickedStatus,
  changedroppedStatus,
  rideEndStatus,
  
  // MOBILE
  viewMRideRequests,
  childrenCountSchool,
  ridingTimes,
  // childrenSchool
};
