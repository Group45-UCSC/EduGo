const express = require("express");

const router = express.Router();

//import functions
const { addEmployee, viewSupList, viewVCList } = require("../controllers/admin/empController");
const { conditionCount, vehiCount, vehiList, conditionList } = require("../controllers/admin/vehiController");
const { driverList } = require("../controllers/admin/driverController");
const { childCount, childList } = require("../controllers/admin/childController");
const { parentList } = require("../controllers/admin/parentController");
const { rideCount, allrideList, ongoingList } = require("../controllers/admin/rideController");
const { reviewList } = require("../controllers/admin/reviewController");
const { curEmergencyList, doneEmergencyList } = require("../controllers/admin/emergencyController");
const { totalRev, totalExp, totalProfit, revIncomeData, revExpenseData } = require("../controllers/admin/financeController");

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
router.route("/dashboard/vcount").get(vehiCount);
router.route("/dashboard/rcount").get(rideCount);
router.route("/dashboard/childcount").get(childCount);
router.route("/dashboard/conditioncount").get(conditionCount);
router.route("/condition/list").get(conditionList);
router.route("/dashboard/reviews").get(reviewList);
router.route("/emergencylist/current").get(curEmergencyList);
router.route("/emergencylist/completed").get(doneEmergencyList);
router.route("/finance/revcount").get(totalRev);
router.route("/finance/expcount").get(totalExp);
router.route("/finance/profitcount").get(totalProfit);
router.route("/finance/income").get(revIncomeData);
router.route("/finance/expense").get(revExpenseData);

module.exports = router;
