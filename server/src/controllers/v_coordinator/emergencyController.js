const pool = require("../../dbConnection");

//view emergency details 
const emergencyls = async (req, res) => {

    try {
      //db query
      const emergencylist = await pool.query(
        "SELECT emergency.emergency_id, emergency.situation, emergency.date, emergency.status, registered_users.contact_number, registered_users.user_name FROM emergency INNER JOIN registered_users ON registered_users.user_id = emergency.user_id;",

      );

    return res.json(emergencylist.rows);
    } catch (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }
  };
  
  module.exports = { emergencyls };
  