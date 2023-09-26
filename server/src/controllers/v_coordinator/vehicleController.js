const pool = require("../../dbConnection");

//view all vechicle list
const vehicleList = async (req, res) => {

  try {
    //db query
    const vehicleData = await pool.query(
      "SELECT * FROM vehicle v INNER JOIN registered_users u ON v.driver_id = u.user_id",
    );

  return res.json(vehicleData.rows);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};


//view relavant details in vehicle details container => page vehicle details
const vehicledetails = async (req, res) => {

  try {
    //db query
    const vehicleDatas = await pool.query(
      "SELECT vehicle.vehicle_id , vehicle.vehicle_type, vehicle.vehicle_model, vehicle.vehicle_no, vehicle.make, vehicle.manufacture_year, vehicle.engine_no, vehicle.chassis.no, school_ride.ride_type, school_ride.location_morning_ride, school_ride.location_noon_ride  FROM vehicle INNER JOIN school_ride ON vehicle.vehicle_id = school_ride.vehicle_id",
    );

  return res.json(vehicleDatas.rows);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};


//view vehicle request table
const vehiclerequest = async (req, res) => {

  try {
    //db query
    const requestDatas = await pool.query(
      "SELECT * FROM vehicle_verify vv INNER JOIN registered_users u ON u.user_id = vv.driver_id",
    );
  return res.json(requestDatas.rows);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};


//view vehicle condition check table
const ccrequestList = async (req, res) => {

  try {
    //db query
    const ccrequestData = await pool.query(
      "SELECT * FROM check_vehicle_condition cc INNER JOIN vehicle v ON cc.vehicle_id = v.vehicle_id INNER JOIN registered_users u ON u.user_id = v.driver_id;",
    );
  return res.json(ccrequestData.rows);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("Server Error");
  }
};


  // dashboard verifyrequestCount 
  const VerifyrequstCount = async (req, res) => {

    try{
    //db query
    const requestData = await pool.query(
      "SELECT COUNT(*) FROM (SELECT * FROM vehicle_verify) AS vehicle_verify_count",
    );
  
    return res.json(requestData.rows);
    } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
  };


    // dashboard CCrequestCount 
    const ccrequestCount = async (req, res) => {

      try{
      //db query
      const ccrequestData = await pool.query(
        "SELECT COUNT(*) FROM (SELECT * FROM check_vehicle_condition) AS check_vehicle_condition_count",
      );
    
      return res.json(ccrequestData.rows);
      } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
    };


module.exports = { vehicleList, vehicledetails, vehiclerequest,ccrequestList,VerifyrequstCount, ccrequestCount };