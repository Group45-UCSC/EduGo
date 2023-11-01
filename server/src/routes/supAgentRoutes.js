const express = require("express");
const upload = require("../utils/multer");

const router = express.Router();

//import functions

const {
  viewParentDetails,
  viewChildrenDetails,
  viewDriverDetails,
  viewVehicleDetails,
} = require("../controllers/sup_agent/detailsController");
const {
  viewChatItems,
  sendMessage,
  receiveMessage,
} = require("../controllers/sup_agent/chatController");
const {viewProfileDetails} = require("../controllers/sup_agent/profileController")
const {viewComplaints} = require("../controllers/sup_agent/complaintController");
//create routes
// router.route("/complaints/all").get(viewAllComplaints);
router.route("/parents/viewParent").get(viewParentDetails);
router.route("/parents/viewChildren").get(viewChildrenDetails);
router.route("/drivers/viewDriver").get(viewDriverDetails);
router.route("/drivers/viewVehicle").get(viewVehicleDetails);
router.route("/chat/viewChat").get(viewChatItems);
router.route("/chat/sendMessage/:userId").post(sendMessage);
router.route("/chat/receiveMessage/:userId").get(receiveMessage);
router.route("/supAgentProfile/viewDetails/:userId").get(viewProfileDetails);
router.route("/complaints/viewComplaints").get(viewComplaints);

module.exports = router;
