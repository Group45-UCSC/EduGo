//db connection
const pool = require("../../dbConnection");

//to get school details for schools page -> GET method
const viewSchoolDetails = async (req, res) => {
  try {
    const userId = req.params.userId;

    //to get all school data in the edugo
    const allSchoolData = await pool.query(
      "SELECT * FROM school ORDER BY school_id ASC  "
    );

    //to get driver registered school data
    const regSchoolData = await pool.query(
      "SELECT school.school_name, school.location,school.school_id FROM school INNER JOIN reaching_school ON school.school_id= reaching_school.school_id WHERE reaching_school.driver_id = '" +
        userId +
        "' ORDER BY school.school_id ASC "
    );

    return res.json({
      schoolList: allSchoolData.rows,
      regSchoolList: regSchoolData.rows,
    });
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//driver select school function -> POST
const selectSchool = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { schoolId } = req.body;

    //get the ride_id of the related driver
    const getRideId = await pool.query(
      "SELECT ride_id FROM school_ride WHERE driver_id = '" + userId + "' "
    );

    const rideId = getRideId.rows[0].ride_id;

    //insert into database
    const selectedSchool = await pool.query(
      "INSERT INTO reaching_school (ride_id,school_id,driver_id) VALUES ($1,$2,$3) RETURNING * ",
      [rideId, schoolId, userId]
    );

    return res.json(selectedSchool.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//check ride school has children or not -> POST method
const checkRideBeforeRemove = async (req, res) => {
  try {
    const userId = req.params.userId;
    const schoolId = req.params.schoolId;

    //to get all children data who use this ride to this school
    const checkRideChildren = await pool.query(
      "SELECT * FROM children WHERE driver_id  =   '" +
        userId +
        "' AND school_id =   '" +
        schoolId +
        "' "
    );

    if (checkRideChildren.rows.length === 0) {
      //no children that go to this school -> can delete
      return res.status(201).json("can delete");
    } else {
      return res.status(202).json("can't delete");
    }
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//to remove school details from ride -> Delete method
const removeSchoolFromRide = async (req, res) => {
  try {
    const userId = req.params.userId;
    const schoolId = req.params.schoolId;

    //to get all children data who use this ride to this school
    const result = await pool.query(
      "DELETE FROM reaching_school WHERE driver_id  =   '" +
        userId +
        "' AND school_id =   '" +
        schoolId +
        "' "
    );

    return res.json(result);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

module.exports = {
  viewSchoolDetails,
  selectSchool,
  checkRideBeforeRemove,
  removeSchoolFromRide,
};
