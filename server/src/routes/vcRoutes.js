const express = require("express");

const router = express.Router();

//import functions
const {vehicleList} = require("../controllers/v_coordinator/vehicleController");
const {emergencyls} = require("../controllers/v_coordinator/emergencyController");
const {emchildren} = require("../controllers/v_coordinator/emergencyController");
const {emergencyCount} = require("../controllers/v_coordinator/emergencyController");
const {emergencynow} = require("../controllers/v_coordinator/emergencyController");
const {ridealllist} = require("../controllers/v_coordinator/rideController");
const {ongoingList} = require("../controllers/v_coordinator/rideController");
const {OngoingRideCount} = require("../controllers/v_coordinator/rideController");
const {srchildren} = require("../controllers/v_coordinator/rideController");
const {vehicledetails} = require("../controllers/v_coordinator/vehicleController");
const {vehiclerequest} = require("../controllers/v_coordinator/vehicleController");
const {VerifyrequstCount} = require("../controllers/v_coordinator/vehicleController");
const {ccrequestCount} = require("../controllers/v_coordinator/vehicleController");
const {ccrequestList} = require("../controllers/v_coordinator/vehicleController");
const {requestform} = require("../controllers/v_coordinator/vehicleController");
const {rejectvehiRequest} = require("../controllers/v_coordinator/vehicleController");
const {acceptvehiRequest} = require("../controllers/v_coordinator/vehicleController");
const {updatecomment} = require("../controllers/v_coordinator/emergencyController");

//create routes
router.route("/vehicles/vehicle").get(vehicleList);
router.route("/emergency/emergencytbl").get(emergencyls);
router.route("/emergencydetails/emergencychildren").get(emchildren);
router.route("/rides/ridetbl").get(ridealllist);
router.route("/rides/ongoingtbl").get(ongoingList);
router.route("/dashboard/ongoingridecount").get(OngoingRideCount);
router.route("/dashboard/emergencycount").get(emergencyCount);
router.route("/dashboard/emergencynow").get(emergencynow);
router.route("/dashboard/verifycount").get(VerifyrequstCount);
router.route("/ridesdetails/ridechildren").get(srchildren);
router.route("/vehiclesdetails/vehicledetails:vehicle_id").get(vehicledetails);
router.route("/vrrequest/requestdetails").get(vehiclerequest);
router.route("/dashboard/ccCount").get(ccrequestCount);
router.route("/ccrequest/ccrequestls").get(ccrequestList);
router.route("/vrrequest/requestform").get(requestform);
router.route("/vrmodal/rform").put(rejectvehiRequest);
router.route("/vrmodal/accept").put(acceptvehiRequest);
router.route("/emergencydetails/comment").put(updatecomment);

module.exports = router;