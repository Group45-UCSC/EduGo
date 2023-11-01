const pool = require("../../dbConnection");
const express = require('express');
const app = express();

//view all vechicle list
const vehicleList = async (req, res) => {

  try {
    //db query
    const vehicleData = await pool.query(
      "SELECT * FROM vehicle v INNER JOIN registered_users u ON v.driver_id = u.user_id WHERE verify_status = 'accepted';"

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
      "SELECT * FROM vehicle v INNER JOIN school_ride sr ON v.vehicle_id = sr.vehicle_id",
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
      "SELECT * FROM vehicle v INNER JOIN registered_users u ON v.driver_id = u.user_id WHERE verify_status = 'pending';"
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
      "SELECT COUNT(*) FROM (SELECT * FROM vehicle) AS vehicle_verify_count WHERE verify_status = 'pending'",
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

  //view request forms
  const requestform = async (req, res) => {

    try{
    //db query
    const reviewData = await pool.query(
      "SELECT * FROM vehicle",
    );

    return res.json(reviewData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };



  //reject ride request  -> PUT method
  const rejectvehiRequest = async (req, res) => {
    try {
      // const vehicleId = req.params.vehicleId;
      const { vehicleId } = req.body;
  
      //update ride request table
      const result1 = await pool.query(
        "UPDATE vehicle SET verify_status = 'rejected' WHERE vehicle_id = '" + vehicleId + "'",
      );
      return res.json({
        data1: result1.rows,
      });
    } catch (err) {
      console.error(err.massage);
      return res.status(500).send("Server Error");
    }
  };


module.exports = { rejectvehiRequest, vehicleList, vehicledetails, vehiclerequest,ccrequestList,VerifyrequstCount, ccrequestCount, requestform,  };