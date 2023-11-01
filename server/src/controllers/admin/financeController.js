const pool = require("../../dbConnection");

// total revenue card
const totalRev = async (req, res) => {

  try{
  //db query
  const RevenueData = await pool.query(
    "SELECT SUM(amount) AS totalrev FROM income WHERE EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)",
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
      "SELECT SUM(amount) AS totalexp FROM expense WHERE EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)",
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
        "(SELECT SUM(amount) FROM income WHERE EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)) - " +
        "(SELECT SUM(amount) FROM expense WHERE EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)) AS totalprofit"
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
      "SELECT * FROM income WHERE EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)",
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
      "SELECT * FROM expense WHERE EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE) AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE)",
    );
  
    return res.json(ExpenseAmount.rows);
    } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
  };

  // main analytics chart
  const incomeExpense = async (req, res) => {

    try{
    //db query
    const incExp = await pool.query(
      "SELECT income.year, TO_CHAR(TO_DATE(income.month_name::text, 'MM'), 'Month') AS month_name, income.total_income, expense.total_expense, income.total_income - expense.total_expense AS profit FROM (SELECT EXTRACT(YEAR FROM date) AS year, EXTRACT(MONTH FROM date) AS month_name, SUM(amount) AS total_income FROM income GROUP BY EXTRACT(YEAR FROM date), EXTRACT(MONTH FROM date)) AS income LEFT JOIN (SELECT EXTRACT(YEAR FROM date) AS year, EXTRACT(MONTH FROM date) AS month_name, SUM(amount) AS total_expense FROM expense GROUP BY EXTRACT(YEAR FROM date), EXTRACT(MONTH FROM date)) AS expense ON income.year = expense.year AND income.month_name = expense.month_name"
      );
  
    return res.json(incExp.rows);
    } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
  };
  
  module.exports = { totalRev, totalExp, totalProfit, revIncomeData, revExpenseData, incomeExpense };