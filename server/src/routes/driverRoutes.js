const express = require("express");

const router = express.Router();

//import functions
const { hasRide } = require("../controllers/driver/driverController");

//create routes
router.route("/dashboard/hasride/:userId").get(hasRide);

module.exports = router;
