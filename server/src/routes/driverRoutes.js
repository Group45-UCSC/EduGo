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

  // MOBILE
  viewRidePayment,
} = require("../controllers/driver/financeController");
const {addComplaint,viewUserComplaints } = require("../controllers/driver/complaintController");

const {
  viewRideDetails,
  viewRideRequests,
  rejectRideRequest,
  checkReachingSchool,
  acceptRideRequest,
  setChildRideTime,
  viewRideChildList,
  changePickedStatus,
  changedroppedStatus,
  rideEndStatus,
  
  // MOBILE
  childrenCountSchool,
  // childrenSchool,

} = require("../controllers/driver/rideController");
const {
  viewSchoolDetails,
  selectSchool,
  checkRideBeforeRemove,
  removeSchoolFromRide,
} = require("../controllers/driver/schoolController");


// MOBILE
// Children view
const { 
  getChildrenDetails ,
} = require("../controllers/driver/childrenController");

const {
  sendMessage,
  receiveMessage,
} = require("../controllers/driver/supChatController");


//create routes
router.route("/dashboard/hasride/:userId").get(hasRide);
// router.route("/add/vehicle/:userId").post(addVehicle);
router.route("/vehicledetails/:userId").get(viewVehicle);

router.route("/vehicle/add/:userId").post(addVehicle);
router.post("/vehicle/upload/", upload.single("vehicleRegDoc"), uploadVehicle);

router.route("/vehicle/viewImg/:userId").get(viewVehicleImg);

//next ride page
router.route("/ride/children/view/:userId").get(viewRideChildList);
router.route("/ride/child/picked").put(changePickedStatus);
router.route("/ride/child/dropped").put(changedroppedStatus);
router.route("/ride/end/:userId").put(rideEndStatus);


//ride page
router.route("/ride/view/details/:userId").get(viewRideDetails);
router.route("/ride/requests/view/:userId").get(viewRideRequests);
router.route("/ride/request/reject/:childId,:requestId").put(rejectRideRequest);
router
  .route("/ride/request/school/check/:userId,:schoolId")
  .get(checkReachingSchool);
router.route("/ride/request/accept/:userId").put(acceptRideRequest);
router.route("/ride/set/ridetime/").post(setChildRideTime);

//school page
router.route("/ride/view/school/:userId").get(viewSchoolDetails);
router.route("/ride/select/school/:userId").post(selectSchool);
router
  .route("/ride/checkBeforeRemove/school/:userId,:schoolId")
  .get(checkRideBeforeRemove);
router
  .route("/ride/remove/school/:userId,:schoolId")
  .delete(removeSchoolFromRide);

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

// MOBILE
// Children details page
router.route("/childrenDetails/:driverId").get(getChildrenDetails);

// ride cash payment
router.route("/ridePayment/:driverId").get(viewRidePayment);

// children count school
router.route("/schoolChildren/:driverId").get(childrenCountSchool);

// children name in school
// router.route("/childrenSchool/:driverId").get(childrenSchool);

//support page
router.route("/complaint/add/:userId").post(addComplaint);
router.route("/support/viewComplaint/:userId").get(viewUserComplaints);

router.route("/minimizablechat/sendMessage/:userId").post(sendMessage);
router.route("/minimizablechat/receiveMessage/:userId").get(receiveMessage);


module.exports = router;
