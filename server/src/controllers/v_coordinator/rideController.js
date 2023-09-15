const pool = require("../../dbConnection");

//view emergency details -> GET
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
  
  module.exports = { ridealllist };