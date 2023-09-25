const pool = require("../../dbConnection");

//view complaints function
const viewChatItems = async (req, res) => {
  try {
    const query = await pool.query(
      "SELECT user_id, user_role, user_name from registered_users"
    );

    const data = query.rows;
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error retrieving data" });
  }
};

module.exports = { viewChatItems };
