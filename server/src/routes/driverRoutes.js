const express = require("express");

const upload = require("../utils/multer");

const router = express.Router();

//import functions
const {
  hasRide,
  addVehicle,
  viewVehicle,
  uploadVehicle,
} = require("../controllers/driver/driverController");

//create routes2
router.route("/dashboard/hasride/:userId").get(hasRide);
router.route("/add/vehicle/:userId").post(addVehicle);
router.route("/vehicledetails/:userId").get(viewVehicle);
// router.route("/vehicle/upload/").post(uploadVehicle);
// router.post(
//   "/addride/vehicle/:userId",
//   upload.single("registrationDocumentImage"),
//   addVehicle
// );

router.post("/vehicle/upload/", upload.single("vehicleRegDoc"), uploadVehicle);

module.exports = router;
