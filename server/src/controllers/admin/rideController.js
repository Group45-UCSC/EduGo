const pool = require("../../dbConnection");

//view all rides list
const allrideList = async (req, res) => {

    try{
    //db query
    const allrideData = await pool.query(
      "SELECT * FROM school_ride r INNER JOIN registered_users u ON r.driver_id = u.user_id INNER JOIN vehicle v on v.vehicle_id = r.vehicle_id",
    );
  
    return res.json(allrideData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };

//   ongoing ride list
  const ongoingList = async (req, res) => {

    try{
    //db query
    const ongoingData = await pool.query(
      "SELECT * FROM school_ride r INNER JOIN registered_users u ON r.driver_id = u.user_id INNER JOIN vehicle v on v.vehicle_id = r.vehicle_id WHERE ride_type = 'ongoing'",
    );
  
    return res.json(ongoingData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };
  
  module.exports = { allrideList, ongoingList };