const express = require("express");

const router = express.Router();

//import functions
const { viewRide } = require("../controllers/driver/rideController");

//create routes
router.route("/rideDetails/:id").get(viewRide);

module.exports = router;
