const express = require("express");

//for image uploading
const upload = require("../utils/multer");

const router = express.Router();

//import functions
const {
  hasRide,
  viewVehicle,
} = require("../controllers/driver/driverController");

const {
  addFeedback,
  viewFeedback,
} = require("../controllers/driver/feedbackController");

const {
  addVehicle,
  uploadVehicle,
  viewVehicleImg,
} = require("../controllers/driver/vehicleController");

const {
  addDeposit,
  uploadSlip,
  viewTotalCash,
  viewCashPaymentData,
  viewLastIncome,
  viewIncomeChart,
  viewTotalIncome,
  viewChildFees,
} = require("../controllers/driver/financeController");

const { viewRideDetails, viewSchoolDetails } = require("../controllers/driver/rideController");

//create routes
router.route("/dashboard/hasride/:userId").get(hasRide);
// router.route("/add/vehicle/:userId").post(addVehicle);
router.route("/vehicledetails/:userId").get(viewVehicle);

router.route("/vehicle/add/:userId").post(addVehicle);
router.post("/vehicle/upload/", upload.single("vehicleRegDoc"), uploadVehicle);

router.route("/vehicle/viewImg/:userId").get(viewVehicleImg);

//ride page
router.route("/ride/view/details/:userId").get(viewRideDetails);
//school page
router.route("/ride/view/school/:userId").get(viewSchoolDetails);

//income page
router.route("/income/view/lastmonth/:userId").get(viewLastIncome);
router.route("/income/view/chart/:userId").get(viewIncomeChart);
router.route("/income/view/totaldetails/:userId").get(viewTotalIncome);
router.route("/income/view/childrenfees/:userId").get(viewChildFees);

//deposit page
router.route("/deposit/add/:userId").post(addDeposit);
router.post("/deposit/upload/", upload.single("addDeposit"), uploadSlip);
router.route("/deposit/viewtotal/:userId").get(viewTotalCash);
router.route("/deposit/cashpayments/view/:userId").get(viewCashPaymentData);

//feedback page
router.route("/feedback/add/:userId").post(addFeedback);
router.route("/feedback/view/:userId").get(viewFeedback);

module.exports = router;
