const query = require("../../models/adminModel");

//add employee function -> POST method
const addEmployee = async (req, res) => {
  try {
    await pool.query(query.addEmployee);
    res.status(200).Json({
      tatus: "success",
      data: "It is working",
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { addEmployee };
