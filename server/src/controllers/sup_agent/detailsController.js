const pool = require("../../dbConnection");

const viewParentDetails = async (req, res) => {
  try {
    const query = await pool.query("SELECT * FROM registered_users WHERE user_role = 'parent'");
    // const userRole = 'parent';
    // const {rows} =  await pool.query(query, [userRole]);

    // res.status(200).Json({
    //   status: "success",
    //   data: rows,
    // });
    return res.json(query.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
};

module.exports = { viewParentDetails };
