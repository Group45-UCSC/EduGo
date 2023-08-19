const express = require("express");

const router = express.Router();

//import functions
const {  viewChildDashboard, viewChildChildren} = require("../controllers/parent/childController");
const { addFeedback , addEdugoFeedback} = require("../controllers/parent/feedbackController");

//create routes
router.route("/feedback/add/:userId").post(addFeedback);
router.route("/edugofeedback/add/:userId").post(addEdugoFeedback);
router.route("/dashboard/children/:userId").get(viewChildDashboard);
router.route("/children/view/:userId").get(viewChildChildren);


module.exports = router;
