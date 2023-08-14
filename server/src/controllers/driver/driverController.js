//db connection
const pool = require("../../dbConnection");

//get ride count function -> GET method
const hasRide = async (req, res) => {
  try {
    const userId = req.params.userId;

    const hasrideData = await pool.query(
      "SELECT has_ride FROM driver WHERE user_id =  '" + userId + "'"
    );

    const hasride = hasrideData.rows[0].has_ride;

    // const hasVehicleData = await pool.query(
    //   "SELECT has_vehicle FROM driver WHERE user_id =  '" + userId + "'"
    // );

    // const hasvehicle = hasVehicleData.rows[0].has_vehicle;
    
    // return res.json({ hasride });
    return res.json({ hasRide: hasride });

    // res.status(200).Json({
    //   status: "success",
    //   data: "It is working",
    // });
  } catch (err) {
    console.log(err.message);
  }
};



module.exports = { hasRide };

// app.get('/driver/ride/hasRide', (req, res) => {
//   // Your logic to check if the driver has a ride
//   const hasRide = true; // Change this based on your actual logic

//   res.json({ hasRide });
// });
