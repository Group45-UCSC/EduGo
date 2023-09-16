const pool = require("../../dbConnection");

// dashboard children count
const childCount = async (req, res) => {

  try{
  //db query
  const childCountData = await pool.query(
    "SELECT COUNT(*) FROM children",
  );

  return res.json(childCountData.rows);
  } catch (err) {
  console.error(err.message);
  return res.status(500).send("Server Error");
}
};

//view vehicle list in vehicles and drivers page
const childList = async (req, res) => {

    try{
    //db query
    const childData = await pool.query(
      "SELECT c.child_id, c.child_name, c.school_name, u.address, u.contact_number, v.vehicle_no FROM children c INNER JOIN registered_users u ON u.user_id = c.parent_id INNER JOIN school_ride r ON r.ride_id = c.ride_id INNER JOIN vehicle v ON v.vehicle_id = r.vehicle_id",
    );
  
    return res.json(childData.rows);
    } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
  };
  
  module.exports = { childCount, childList };