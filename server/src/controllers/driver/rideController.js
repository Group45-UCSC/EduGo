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
      "SELECT * FROM ride_request INNER JOIN children ON ride_request.child_id = children.child_id WHERE ride_request.driver_id = '" +
        userId +
        "' AND ride_request.request_status = 'pending' ORDER BY ride_request.request_id ASC "
    );

    // console.log(rideData.rows);

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

module.exports = { viewRideDetails, viewRideRequests, rejectRideRequest };
