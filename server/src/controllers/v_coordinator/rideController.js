const pool = require("../../dbConnection");

//view allride details -> GET
const ridealllist = async (req, res) => {
    
    try {
    //db query
    const allrideList = await pool.query(
        "SELECT school_ride.ride_id, school_ride.ride_type, school_ride.location_morning_ride, school_ride.location_noon_ride, registered_users.contact_number, vehicle.vehicle_no FROM school_ride INNER JOIN registered_users ON registered_users.user_id = school_ride.driver_id INNER JOIN vehicle ON school_ride.vehicle_id = vehicle.vehicle_id;" ,
        );

    return res.json(allrideList.rows);
    } catch (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }
  };


  //   ongoing ride list
  const ongoingList = async (req, res) => {

    try{
    //db query
    const ongoingData = await pool.query(
      "SELECT school_ride.ride_id, school_ride.ride_type, school_ride.location_morning_ride, school_ride.location_noon_ride, registered_users.contact_number, vehicle.vehicle_no FROM school_ride INNER JOIN registered_users ON registered_users.user_id = school_ride.driver_id INNER JOIN vehicle ON school_ride.vehicle_id = vehicle.vehicle_id WHERE ride_type = 'Ongoing';" ,
    );
  
    return res.json(ongoingData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };



  // dashboard OngoingRideCount count
  const OngoingRideCount = async (req, res) => {

  try{
  //db query
  const OngoingData = await pool.query(
    "SELECT COUNT(*) FROM (SELECT * FROM school_ride WHERE ride_type = 'Ongoing') AS ongoing_rides_count",
  );

  return res.json(OngoingData.rows);
  } catch (err) {
  console.error(err.message);
  return res.status(500).send("Server Error");
}
};


  
  module.exports = { ridealllist, ongoingList, OngoingRideCount};