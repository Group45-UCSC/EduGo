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

module.exports = { viewPayment, viewPastPayment };
