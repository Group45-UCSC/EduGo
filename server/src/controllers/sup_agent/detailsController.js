const pool = require("../../dbConnection");

const viewParentDetails = async (req, res) => {
  try {
    const query = await pool.query(`
    SELECT ru.*, c.child_id, c.child_name, c.school_id, c.image, c.driver_id
    FROM registered_users ru
    LEFT JOIN children c ON ru.user_id = c.parent_id
    WHERE ru.user_role = 'parent'
  `);
    
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
