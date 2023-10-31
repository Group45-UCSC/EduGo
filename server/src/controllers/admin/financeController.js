const pool = require("../../dbConnection");

// total revenue card
const totalRev = async (req, res) => {

  try{
  //db query
  const RevenueData = await pool.query(
    "SELECT SUM(amount) AS totalrev FROM cash_payment WHERE EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)",
  );

  return res.json(RevenueData.rows);
  } catch (err) {
  console.error(err.message);
  return res.status(500).send("Server Error");
}
};

// total expenses card
const totalExp = async (req, res) => {

    try{
    //db query
    const ExpensesData = await pool.query(
      "SELECT SUM(amount) AS totalexp FROM cash_deposit WHERE EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)",
    );
  
    return res.json(ExpensesData.rows);
    } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
  };

  // total profit card
const totalProfit = async (req, res) => {

    try{
    //db query
    const ProfitData = await pool.query(
        "SELECT " +
        "(SELECT SUM(amount) FROM cash_payment WHERE EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)) - " +
        "(SELECT SUM(amount) FROM cash_deposit WHERE EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)) AS totalprofit"
        );
  
    return res.json(ProfitData.rows);
    } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
  };

  // income table
const revIncomeData = async (req, res) => {

    try{
    //db query
    const IncomeData = await pool.query(
      "SELECT * FROM cash_payment  WHERE EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)",
    );
  
    return res.json(IncomeData.rows);
    } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
  };

    // expenses table
const revExpenseData = async (req, res) => {

    try{
    //db query
    const ExpenseAmount = await pool.query(
      "SELECT * FROM cash_deposit  WHERE EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)",
    );
  
    return res.json(ExpenseAmount.rows);
    } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
  };
  
  module.exports = { totalRev, totalExp, totalProfit, revIncomeData, revExpenseData };