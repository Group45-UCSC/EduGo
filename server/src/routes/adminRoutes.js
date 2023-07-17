const express = require("express");

const router = express.Router();

//import functions
const { addEmployee } = require("../controllers/admin/empController");

//create routes
router.route("/addEmp").post(addEmployee);

module.exports = router;
