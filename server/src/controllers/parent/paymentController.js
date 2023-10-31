//db connection
const pool = require("../../dbConnection");

//get payment details
const viewPayment = async (req, res) => {
  try {
    const userId = req.params.userId;
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Adding 1 to match your database format

    //db query
    const paymentData = await pool.query(
      "SELECT rp.parent_id,rp.child_id,rp.amount, rp.related_month, rp.pay_status, c.child_name FROM ride_payment rp INNER JOIN children c ON rp.child_id = c.child_id WHERE rp.parent_id = $1 AND rp.related_month = $2 ",
      [userId, currentMonth]
    );

    return res.json(paymentData.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//get past payments
const viewPastPayment = async (req, res) => {
  try {
    const userId = req.params.userId;

    //db query
    const pastPaymentData = await pool.query(
      "SELECT rp.parent_id, rp.child_id, rp.amount, rp.related_month, rp.date, rp.year, c.child_name FROM ride_payment rp INNER JOIN children c ON rp.child_id = c.child_id WHERE rp.parent_id = $1 AND rp.pay_status = $2",
      [userId, "paid"]
    );

    return res.json(pastPaymentData.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

const viewRidePayment = async (req, res) => {
  try {
    const parentId = req.params.parentId;
    // console.log(parentId);
    const ridePaymentData = await pool.query(
      "SELECT ride_payment.related_month, ride_payment.year, ride_payment.pay_status, ride_payment.amount, children.child_name FROM ride_payment INNER JOIN children ON ride_payment.child_id = children.child_id WHERE ride_payment.parent_id = '" + parentId + "'"
    );

    return res.json(ridePaymentData.rows);
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};

module.exports = { viewPayment, viewPastPayment, viewRidePayment};
