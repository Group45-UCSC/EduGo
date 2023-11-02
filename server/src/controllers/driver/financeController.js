//db connection
const pool = require("../../dbConnection");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../uploads/"); // Replace with your actual upload directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

const addDeposit = async (req, res) => {
  try {
    const userId = req.params.userId;

    //1. destructure the req.body(name, email, password)
    const { depositedAmount, depositedDate, depositSlip } = req.body;

    //2. generate new vehicle id
    const lastDepositData = await pool.query(
      "SELECT * FROM cash_deposit ORDER BY deposit_id DESC LIMIT 1"
    );

    const lastDepositId = lastDepositData.rows[0]?.deposit_id || "DP0001";
    const numericPart = parseInt(lastDepositId.replace("DP", ""), 10); // Extract numeric part and convert to integer
    const newNumericPart = numericPart + 1;
    const newDepositId = `DP${newNumericPart.toString().padStart(4, "0")}`; // Generate new vehicle ID

    //3. insert the new vehicle inside our database
    const newDeposit = await pool.query(
      "INSERT INTO cash_deposit (deposit_id, driver_id, amount, date, related_month, slip_image, verify_status, year ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING * ",
      [
        newDepositId,
        userId,
        depositedAmount,
        depositedDate,
        11,
        depositSlip,
        true,
        2023,
      ]
    );
    //6. register success
    return res.json(newDeposit.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const uploadSlip = async (req, res) => {
  console.log("uploaded");
  console.log(req.file); //file.filename
  return res.json({
    filename: req.file.filename,
  });
};

//view total cash collected details -> GET method
const viewTotalCash = async (req, res) => {
  try {
    const userId = req.params.userId;

    //db query to get total cash amount
    const totCashData = await pool.query(
      "SELECT SUM(amount) AS total_cash_payment FROM cash_payment WHERE driver_id =  '" +
        userId +
        "' AND related_month = EXTRACT(MONTH FROM CURRENT_DATE) AND year = EXTRACT(YEAR FROM CURRENT_DATE) AND verify_status = true "
    );

    //db query to get total deposit amount
    const totDepositData = await pool.query(
      "SELECT SUM(amount) AS total_deposit_amount FROM cash_deposit WHERE driver_id =  '" +
        userId +
        "' AND related_month = EXTRACT(MONTH FROM CURRENT_DATE) AND year = EXTRACT(YEAR FROM CURRENT_DATE) AND verify_status = true "
    );

    return res.json({
      collected: totCashData.rows[0].total_cash_payment,
      deposited: totDepositData.rows[0].total_deposit_amount,
    });
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

// --------------------------------- CASH PAYMENT-----------------------------------------------------//

//view cash payments data table -> GET method
const viewCashPaymentData = async (req, res) => {
  try {
    const userId = req.params.userId;

    // const cashpaymentData = await pool.query(
    //   "SELECT SUM(amount) AS total_cash_payment FROM cash_payment WHERE driver_id =  '" +
    //     userId +
    //     "' AND related_month = EXTRACT(MONTH FROM CURRENT_DATE)-1 AND year = EXTRACT(YEAR FROM CURRENT_DATE) AND verify_status = true "
    // );

    //db query to get cash payment details
    const cashpaymentData = await pool.query(
      "SELECT cash_payment.cash_pay_id, cash_payment.parent_id, cash_payment.child_id,cash_payment.amount,cash_payment.date,children.child_name FROM cash_payment INNER JOIN children ON cash_payment.child_id = children.child_id WHERE cash_payment.driver_id =  '" +
        userId +
        "' AND related_month = EXTRACT(MONTH FROM CURRENT_DATE) AND year = EXTRACT(YEAR FROM CURRENT_DATE) AND verify_status = true "
    );

    // console.log(cashpaymentData.rows);
    return res.json(cashpaymentData.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

// MOBILE PHONE,
const viewRidePayment = async (req, res) => {
  try {
    const driverId = req.params.driverId;
    console.log(driverId);
    const ridePaymentData = await pool.query(
      "SELECT ride_payment.related_month, ride_payment.year, ride_payment.pay_status, ride_payment.amount, children.child_name FROM ride_payment INNER JOIN children ON ride_payment.child_id = children.child_id WHERE ride_payment.driver_id = '" +
        driverId +
        "'"
    );

    return res.json(ridePaymentData.rows);
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};

// --------------------------------- INCOME PAGE-----------------------------------------------------//

//to get last month income total -> GET method
const viewLastIncome = async (req, res) => {
  try {
    const userId = req.params.userId;

    //db query to get last month total income

    const lastMonthIncome = await pool.query(
      "SELECT SUM(amount) AS last_month_income FROM income WHERE driver_id = '" +
        userId +
        "' AND month = EXTRACT(MONTH FROM CURRENT_DATE)-1 AND year = EXTRACT(YEAR FROM CURRENT_DATE) "
    );

    return res.json({
      income: lastMonthIncome.rows[0].last_month_income,
    });
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//to get last 6 months income details for the chart -> GET method
// const viewIncomeChart = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//   } catch (err) {
//     console.error(err.massage);
//     return res.status(500).send("Server Error");
//   }
// };

const viewIncomeChart = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch data for the last 6 months
    const lastSixMonthsIncome = await pool.query(
      "SELECT month,SUM(amount) AS total_income FROM income WHERE driver_id = '" +
        userId +
        "' AND month >= EXTRACT(MONTH FROM CURRENT_DATE)-6 GROUP BY month ORDER BY month ASC "

      // "SELECT EXTRACT(MONTH FROM date) AS month, SUM(amount) AS total_income
      // FROM income
      // WHERE driver_id = $1
      // AND date >= (CURRENT_DATE - interval '6 months')
      // GROUP BY month
      // ORDER BY month",
      // [userId]
    );

    // console.log(lastSixMonthsIncome.rows);
    return res.json(lastSixMonthsIncome.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

//to get total income details for the table -> GET method
const viewTotalIncome = async (req, res) => {
  try {
    const userId = req.params.userId;

    const incomeData = await pool.query(
      "SELECT income_id, date, amount, month FROM income WHERE driver_id = '" +
        userId +
        "' ORDER BY income_id ASC "
    );

    return res.json(incomeData.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//to get total children list with payment status -> GET method
const viewChildFees = async (req, res) => {
  try {
    const userId = req.params.userId;

    //to get all child list
    const childFeeList = await pool.query(
      "SELECT child_id,child_name,last_payment_status FROM children WHERE driver_id = '" +
        userId +
        "' "
    );

    // console.log(childFeeList.rows);

    return res.json(childFeeList.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

module.exports = {
  addDeposit,
  uploadSlip,
  viewTotalCash,
  viewCashPaymentData,
  viewLastIncome,
  viewIncomeChart,
  viewTotalIncome,
  viewChildFees,

  // MOBILE
  viewRidePayment,
};

//EXTRACT(MONTH FROM NOW()) would return 9 for september

// ex:
// INSERT INTO your_table_name (name, age, month)
// VALUES ('John', 30, EXTRACT(MONTH FROM NOW()));
