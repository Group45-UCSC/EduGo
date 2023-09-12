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



module.exports = { viewRideDetails };
