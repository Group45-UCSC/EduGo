const express = require("express");

const router = express.Router();

//import functions
const { updateChild } = require("../controllers/parent/childController");

//create routes
router.route("/updateChild/:id").put(updateChild);

module.exports = router;
