const express = require("express");

const router = express.Router();

//import functions
const {vehicleList} = require("../controllers/v_coordinator/vehicleController");
const {emergencyls} = require("../controllers/v_coordinator/emergencyController");
const {ridealllist} = require("../controllers/v_coordinator/rideController");
const {ongoingList} = require("../controllers/v_coordinator/rideController");
const {OngoingRideCount} = require("../controllers/v_coordinator/rideController");
const {vehicledetails} = require("../controllers/v_coordinator/vehicleController");
//create routes
router.route("/vehicles/vehicle").get(vehicleList);
router.route("/emergency/emergencytbl").get(emergencyls);
router.route("/rides/ridetbl").get(ridealllist);
router.route("/rides/ongoingtbl").get(ongoingList);
router.route("/dashboard/ongoingridecount").get(OngoingRideCount);
router.route("/vehiclesdetails/vehicledetails:vehicle_id").get(vehicledetails);

module.exports = router;