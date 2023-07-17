const express = require("express");

const router = express.Router();

//import functions
const {viewAllRides} = require("../controllers/v_coordinator/vehicleController");
const {viewEmergency} = require("../controllers/v_coordinator/emergencyController");

//create routes
router.route("/rideDetails/all").get(viewAllRides);
router.route("/emergency/:rideId").get(viewEmergency);

module.exports = router;