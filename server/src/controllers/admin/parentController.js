const pool = require("../../dbConnection");

//view vehicle list in vehicles and drivers page
const parentList = async (req, res) => {

    try{
    //db query
    const parentData = await pool.query(
      "SELECT DISTINCT p.user_id, u.user_name, u.user_email, u.address, u.contact_number, p.num_of_registered_children, u.nic, c.child_name, c.ride_id FROM parent p INNER JOIN registered_users u ON p.user_id = u.user_id INNER JOIN children c ON c.parent_id = p.user_id",
    );
  
    return res.json(parentData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };
  
  module.exports = { parentList };