// const express = require("express");

// const router = express.Router();

// //import functions
// const {  viewChildDashboard, viewChildChildren,ViewVehicle,viewSchool,viewDriverReview, addRideRequest,addChildren, GetAllChildrentoMap} = require("../controllers/parent/childController");
// const { addFeedback , addEdugoFeedback, getDrivers} = require("../controllers/parent/feedbackController");
// const { viewPayment, viewPastPayment } = require("../controllers/parent/paymentController");

// //create routes
// router.route("/children/addride/:userId").post(addChildren);
// router.route("/feedback/add/:userId").post(addFeedback);
// router.route("/edugofeedback/add/:userId").post(addEdugoFeedback);
// router.route("/dashboard/children/:userId").get(viewChildDashboard);
// router.route("/children/view/:userId").get(viewChildChildren);
// router.route("/children/view").get(GetAllChildrentoMap);                              //?
// router.route("/children/addnewride/view/:userId").get(ViewVehicle);
// router.route("/children/viewVehicle/viewSchool/:rideId").get(viewSchool);
// router.route("/children/viewVehicle/viewReview/:driver_id").get(viewDriverReview);
// router.route("/children/viewVehicle/rideRequest/:userId").post(addRideRequest);
// router.route("/feedback/driverlist/:userId").get(getDrivers);
// router.route("/payment/viewprice/:userId").get(viewPayment);
// router.route("/payment/pastpayment/:userId").get(viewPastPayment)

// module.exports = router;

const express = require("express");

const router = express.Router();

//import functions
const {  viewChildDashboard, viewChildChildren,ViewVehicle,viewSchool,viewDriverReview,addChildren, GetAllChildrentoMap, addRideRequest} = require("../controllers/parent/childController");
const { addFeedback , addEdugoFeedback, getDrivers} = require("../controllers/parent/feedbackController");
const { viewPayment, viewPastPayment } = require("../controllers/parent/paymentController");
const {addComplaint} = require("../controllers/parent/complaintController");
const upload = require("../utils/multer");
const { viewPayment, viewPastPayment, viewRidePayment } = require("../controllers/parent/paymentController");

//create routes
router.route("/children/addchild/:userId").post(addChildren);
router.route("/feedback/add/:userId").post(addFeedback);
router.route("/edugofeedback/add/:userId").post(addEdugoFeedback);
router.route("/dashboard/children/:userId").get(viewChildDashboard);
router.route("/children/view/:userId").get(viewChildChildren);
router.route("/children/map/:userId").get(GetAllChildrentoMap); //? for next ride page
router.route("/children/addnewride/view/:userId").get(ViewVehicle);
router.route("/children/viewVehicle/viewSchool/:rideId").get(viewSchool);
router
  .route("/children/viewVehicle/viewReview/:driver_id")
  .get(viewDriverReview);
// router.route("/children/viewVehicle/rideRequest/:userId").post(addRideRequest);
router.route("/children/viewVehicle/rideRequest/:userId").post(addRideRequest);
router.route("/feedback/driverlist/:userId").get(getDrivers);
router.route("/payment/viewprice/:userId").get(viewPayment);
router.route("/payment/pastpayment/:userId").get(viewPastPayment)
router.route("/complaint/add/:userId").post(upload.array("attachments"),addComplaint);
router.route("/payment/pastpayment/:userId").get(viewPastPayment);


// MOBILE
// view payment
router.route("/ridePayment/:parentId").get(viewRidePayment);

module.exports = router;
