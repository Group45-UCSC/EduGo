const express = require("express");

const router = express.Router();

//import functions
const { hasRide, addVehicle } = require("../controllers/driver/driverController");

//create routes
router.route("/dashboard/hasride/:userId").get(hasRide);
router.route("/addride/vehicle/:userId").post(addVehicle);

module.exports = router;
