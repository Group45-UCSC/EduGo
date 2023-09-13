const express = require("express");

const router = express.Router();

//import functions
const { addEmployee, viewSupList, viewVCList } = require("../controllers/admin/empController");
const { vehiList } = require("../controllers/admin/vehiController");
const { driverList } = require("../controllers/admin/driverController");

//create routes
router.route("/addEmployee").post(addEmployee);
router.route("/employees/agent").get(viewSupList);
router.route("/employees/vc").get(viewVCList);
router.route("/drivers/vehi").get(vehiList);
router.route("/drivers/driver").get(driverList);

module.exports = router;
