const express = require("express");

const router = express.Router();

//import functions
const { addEmployee, viewSupList, viewVCList } = require("../controllers/admin/empController");
const { vehiList } = require("../controllers/admin/vehiController");
const { driverList } = require("../controllers/admin/driverController");
const { childList } = require("../controllers/admin/childController");
const { parentList } = require("../controllers/admin/parentController");
const { allrideList, ongoingList } = require("../controllers/admin/rideController");

//create routes
router.route("/addEmployee").post(addEmployee);
router.route("/employees/agent").get(viewSupList);
router.route("/employees/vc").get(viewVCList);
router.route("/drivers/vehi").get(vehiList);
router.route("/drivers/driver").get(driverList);
router.route("/childrenlist/children").get(childList);
router.route("/childrenlist/parent").get(parentList);
router.route("/rides/all").get(allrideList);
router.route("/rides/ongoing").get(ongoingList);

module.exports = router;
