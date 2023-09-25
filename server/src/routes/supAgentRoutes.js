const express = require("express");

const router = express.Router();

//import functions

const {
  viewParentDetails,
  viewChildrenDetails,
  viewDriverDetails,
  viewVehicleDetails,
} = require("../controllers/sup_agent/detailsController");
const { viewChatItems } = require("../controllers/sup_agent/chatController");
//create routes
// router.route("/complaints/all").get(viewAllComplaints);
router.route("/parents/viewParent").get(viewParentDetails);
router.route("/parents/viewChildren").get(viewChildrenDetails);
router.route("/drivers/viewDriver").get(viewDriverDetails);
router.route("/drivers/viewVehicle").get(viewVehicleDetails);
router.route("/chat/viewChat").get(viewChatItems);
module.exports = router;
