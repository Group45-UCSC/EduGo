const express = require("express");

const router = express.Router();

//import functions
const {
  viewAllComplaints,
} = require("../controllers/sup_agent/chatController");
const {
  viewParentDetails,
  viewChildrenDetails,
  viewDriverDetails,
} = require("../controllers/sup_agent/detailsController");

//create routes
router.route("/complaints/all").get(viewAllComplaints);
router.route("/parents/viewParent").get(viewParentDetails);
router.route("/parents/viewChildren").get(viewChildrenDetails);
router.route("/parents/viewDriver").get(viewDriverDetails);

module.exports = router;
