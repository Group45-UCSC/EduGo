const express = require("express");

const router = express.Router();

//import functions
const { addEmployee, viewSupList, viewVCList } = require("../controllers/admin/empController");

//create routes
router.route("/employees/addEmployee").post(addEmployee);
router.route("/employees/agent").get(viewSupList);
router.route("/employees/vc").get(viewVCList);

module.exports = router;
