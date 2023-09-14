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
  try {
    const userId = req.params.userId;

    //get ride request data
    const rideData = await pool.query(
      "SELECT ride_request.request_id, ride_request.pickup_location, ride_request.school_name,ride_request.parent_id,ride_request.date,ride_request.ride_id,ride_request.request_status,ride_request.child_id,ride_request.ride_shift_type, children.school_id,children.child_name FROM ride_request INNER JOIN children ON ride_request.child_id = children.child_id WHERE ride_request.driver_id = '" +
        userId +
        "' AND ride_request.request_status = 'pending' ORDER BY ride_request.request_id ASC "
    );

    console.log(rideData.rows);

    return res.json(rideData.rows);
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
    const rideId = req.params.userId;
    const childId = req.params.userId;

    const { pickupTime, dropTime, pickupTime2, dropTime2 } = req.body;

    //insert into the ride_children table

    // Return a success response to the frontend
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

module.exports = {
  viewRideDetails,
  viewRideRequests,
  rejectRideRequest,
  checkReachingSchool,
  acceptRideRequest,
  setChildRideTime,
};
