const express = require("express");

const router = express.Router();

//import functions
const { updateChild } = require("../controllers/parent/childController");
const { addFeedback } = require("../controllers/parent/feedbackController");

//create routes
router.route("/updatechild/:id").put(updateChild);
router.route("/feedback/add/:userId").post(addFeedback);

module.exports = router;
