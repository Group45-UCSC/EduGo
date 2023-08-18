const express = require("express");

const router = express.Router();

//import functions
const { updateChild } = require("../controllers/parent/childController");
const { addFeedback } = require("../controllers/parent/feedbackController");
const { addEdugoFeedback } = require("../controllers/parent/feedbackController");

//create routes
router.route("/updatechild/:id").put(updateChild);
router.route("/feedback/add/:userId").post(addFeedback);
router.route("/edugofeedback/add/:userId").post(addEdugoFeedback);

module.exports = router;
