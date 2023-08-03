const express = require("express");

const router = express.Router();

//user Authentication (info validation)
// const authenticate = require("../utils/middleware/authentication");

//user Authorization
// const Authorize = require("../utils/middleware/authorization");

//import functions
// const { register, login, verify, is_verify } = require("../controllers/user/userController");

const { register, login } = require("../controllers/user/userController");

//create routes
// router.route("/register").post(authenticate, register);
// router.route("/login").post(authenticate, login);
// router.route("/verify").get(Authorize, verify);
// router.route("/is_verify").get(Authorize, is_verify);

router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
