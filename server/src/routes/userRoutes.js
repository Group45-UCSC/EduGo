const express = require("express");

const router = express.Router();

//import functions
const { register, login } = require("../controllers/user/userController");

//create routes
router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
