const pool = require("../../dbConnection");


const viewParentDetails = async (req, res) => {
  try {
    const query = await pool.query(`
      SELECT ru.*, c.child_id, c.child_name, c.school_id, c.driver_id
      FROM registered_users ru
      LEFT JOIN children c ON ru.user_id = c.parent_id
      WHERE ru.user_role = 'parent'
    `);

    // Group parents and their children using a Map
    const parentMap = new Map();

    query.rows.forEach((row) => {
      const {
        user_id,
        user_name,
        nic,
        contact_number,
        address,
        profile_image,
        child_id,
        child_name,
        school_id,
        driver_id,
      } = row;
    
      if (!user_id) {
        console.error('Missing user_id:', row);
        return; // Skip this row if user_id is missing
      }
    
      const childData = {
        child_id,
        child_name,
        school_id,
        driver_id,
      };
    
      if (!parentMap.has(user_id)) {
        parentMap.set(user_id, {
          user_id,
          user_name,
          nic,
          contact_number,
          address,
          profile_image,
          children: [],
        });
      }
    
      parentMap.get(user_id).children.push(childData);
    });
    
    const parentsWithChildren = Array.from(parentMap.values());
    console.log('parentsWithChildren:', parentsWithChildren);
    
    return res.json(parentsWithChildren);
    
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
};
const viewChildrenDetails = async(req,res) =>{
  try {
    const query = await pool.query("SELECT * FROM children");
    return res.json(query.rows);
  }catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
}
module.exports = { viewParentDetails, viewChildrenDetails};
