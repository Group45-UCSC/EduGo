//db connection
const pool = require("../../dbConnection");

//view child details for dashboard -> GET method
const viewChildDashboard = async (req, res) => {
  try {
    const userId = req.params.userId;

    //db query
    const childrenData = await pool.query(
      "SELECT * FROM children WHERE parent_id =  '" + userId + "'"
    );

    return res.json(childrenData.rows)
    
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//view child details for dashboard -> GET method
const viewChildChildren = async (req, res) => {
  try {
    const userId = req.params.userId;

    //db query
    const childrenData = await pool.query(
      "SELECT * FROM children WHERE parent_id =  '" + userId + "'"
    );

    return res.json(childrenData.rows)
    
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

module.exports = { viewChildDashboard, viewChildChildren}