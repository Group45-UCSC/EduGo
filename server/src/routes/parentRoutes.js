const express = require("express");

const router = express.Router();

//import functions
const {  viewChildDashboard, viewChildChildren} = require("../controllers/parent/childController");
const { addFeedback , addEdugoFeedback, getDrivers} = require("../controllers/parent/feedbackController");
const { viewPayment, viewPastPayment } = require("../controllers/parent/paymentController");

//create routes
router.route("/feedback/add/:userId").post(addFeedback);
router.route("/edugofeedback/add/:userId").post(addEdugoFeedback);
router.route("/dashboard/children/:userId").get(viewChildDashboard);
router.route("/children/view/:userId").get(viewChildChildren);
router.route("/feedback/driverlist/:userId").get(getDrivers);
router.route("/payment/viewprice/:userId").get(viewPayment);
router.route("/payment/pastpayment/:userId").get(viewPastPayment)


module.exports = router;
