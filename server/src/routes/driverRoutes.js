const express = require("express");

//for image uploading
const upload = require("../utils/multer");

const router = express.Router();

//import functions
const {
  hasRide,
  viewVehicle,
} = require("../controllers/driver/driverController");

const { addFeedback,viewFeedback } = require("../controllers/driver/feedbackController");

const { addVehicle, uploadVehicle,viewVehicleImg } = require("../controllers/driver/vehicleController");

const { addDeposit, uploadSlip, viewTotalCashData } = require("../controllers/driver/financeController")

//create routes
router.route("/dashboard/hasride/:userId").get(hasRide);
// router.route("/add/vehicle/:userId").post(addVehicle);
router.route("/vehicledetails/:userId").get(viewVehicle);

router.route("/vehicle/add/:userId").post(addVehicle);
router.post("/vehicle/upload/", upload.single("vehicleRegDoc"), uploadVehicle);

router.route("/vehicle/viewImg/:userId").get(viewVehicleImg);

router.route("/deposit/add/:userId").post(addDeposit);
router.post("/deposit/upload/", upload.single("addDeposit"), uploadSlip);
router.route("/deposit/viewtotal/:userId").get(viewTotalCashData);



router.route("/feedback/add/:userId").post(addFeedback);
router.route("/feedback/view/:userId").get(viewFeedback);




module.exports = router;
