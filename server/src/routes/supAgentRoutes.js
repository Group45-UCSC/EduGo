const express = require("express");

const router = express.Router();

//import functions
const { viewAllComplaints } = require("../controllers/sup_agent/chatController");
const { viewParentDetails } = require("../controllers/sup_agent/detailsController");

//create routes
router.route("/complaints/all").get(viewAllComplaints);
router.route("/parents/viewParent").get(viewParentDetails);

module.exports = router;
