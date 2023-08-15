const express = require("express");

// const upload = require("../utils/multer");

const router = express.Router();

//import functions
const {
  hasRide,
  addVehicle,
  viewVehicle,
} = require("../controllers/driver/driverController");

//create routes2
router.route("/dashboard/hasride/:userId").get(hasRide);
router.route("/addride/vehicle/:userId").post(addVehicle);
router.route("/vehicledetails/:userId").get(viewVehicle);

// router.post(
//   "/addride/vehicle/:userId",
//   upload.single("registrationDocumentImage"),
//   addVehicle
// );

module.exports = router;
