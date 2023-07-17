const express = require("express");

const router = express.Router();

//import functions
const { viewAllComplaints } = require("../controllers/sup_agent/chatController");

//create routes
router.route("/complaints/all").get(viewAllComplaints);

module.exports = router;
