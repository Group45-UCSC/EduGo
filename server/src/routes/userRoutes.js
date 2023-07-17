const express = require("express");

const router = express.Router();

//import functions
const {login} = require("../controllers/user/userController");

//create routes
router.route("/login").post(login);

module.exports = router;

