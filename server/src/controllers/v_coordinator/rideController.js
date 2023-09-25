const pool = require("../../dbConnection");

//view allride details -> GET
const ridealllist = async (req, res) => {
    
    try {
    //db query
    const allrideList = await pool.query(
        "SELECT * FROM school_ride sr INNER JOIN registered_users u ON u.user_id = sr.driver_id;" ,
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
      "SELECT * FROM school_ride sr INNER JOIN registered_users u ON u.user_id = sr.driver_id WHERE ride_type = 'ongoing';" ,
    );
  
    return res.json(ongoingData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };



  // dashboard ongoingRideCount count
  const OngoingRideCount = async (req, res) => {

  try{
  //db query
  const OngoingData = await pool.query(
    "SELECT COUNT(*) FROM (SELECT * FROM school_ride WHERE ride_type = 'ongoing') AS ongoing_rides_count",
  );

  return res.json(OngoingData.rows);
  } catch (err) {
  console.error(err.message);
  return res.status(500).send("Server Error");
}
};


  
  module.exports = { ridealllist, ongoingList, OngoingRideCount};