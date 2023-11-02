// const query = require("../../models/adminModel");
const pool = require("../../dbConnection");

const bcrypt = require("bcrypt");

//add employee function -> POST method
const addEmployee = async (req, res) => {
  try {
    //1. destructure the req.body(name, email, password)
    const { name, email, tpNum, nic, address, password, role } = req.body;

    //2. check if user exist(if exist then throw error)

    const user = await pool.query(
      "SELECT * FROM registered_users WHERE user_email =   '" + email + "'"
    );

    if (user.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }

    if (role === "supagent") {
      //generate new user id
      const lastUserIdData = await pool.query(
        "SELECT * FROM support_agent ORDER BY user_id DESC LIMIT 1"
      );
      const lastUserId = lastUserIdData.rows[0]?.user_id || "SUP000"; // Default to SUP000 if no user_id found

      const numericPart = parseInt(lastUserId.replace("SUP", ""), 10); // Extract numeric part and convert to integer
      const newNumericPart = numericPart + 1;
      const newUserId = `SUP${newNumericPart.toString().padStart(3, "0")}`; // Generate new user ID

      //3. Bcrypt the user password
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);

      const bcryptPassword = await bcrypt.hash(password, salt);

      //4. enter the new user inside our database

      const newUser = await pool.query(
        "INSERT INTO registered_users ( user_id, user_name, user_email, contact_number, nic, password, address, user_role, reg_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8,NOW()) RETURNING * ",
        [
          newUserId,
          name,
          email,
          tpNum,
          nic,
          bcryptPassword,
          address,
          "supAgent",
        ]
      );

      const newEmp = await pool.query(
        "INSERT INTO support_agent (user_id) VALUES($1) RETURNING * ",
        [newUserId]
      );

      //5. register success
      return res.json(newUser.rows[0]);

      // if role is vehicle coordinator
    } else if (role === "vc") {
      //generate new user id
      const lastUserIdData = await pool.query(
        "SELECT * FROM vehicle_coordinator ORDER BY user_id DESC LIMIT 1"
      );
      const lastUserId = lastUserIdData.rows[0]?.user_id || "VHC000"; // Default to SUP000 if no user_id found

      const numericPart = parseInt(lastUserId.replace("VHC", ""), 10); // Extract numeric part and convert to integer
      const newNumericPart = numericPart + 1;
      const newUserId = `VHC${newNumericPart.toString().padStart(3, "0")}`; // Generate new user ID

      //3. Bcrypt the user password
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);

      const bcryptPassword = await bcrypt.hash(password, salt);

      //4. enter the new user inside our database

      const newUser = await pool.query(
        "INSERT INTO registered_users ( user_id, user_name, user_email, contact_number, nic, password, address, user_role, reg_date) VALUES($1,$2,$3,$4,$5,$6,$7,$8,NOW()) RETURNING * ",
        [newUserId, name, email, tpNum, nic, bcryptPassword, address, "vc"]
      );

      const newEmp = await pool.query(
        "INSERT INTO vehicle_coordinator (user_id) VALUES($1) RETURNING * ",
        [newUserId]
      );

      //5. register success
      return res.json(newUser.rows[0]);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//view support agent list in employees page
const viewSupList = async (req, res) => {
  try {
    //db query
    const agentData = await pool.query(
      "SELECT * FROM registered_users WHERE user_role = 'supAgent'"
    );

    return res.json(agentData.rows);
  } catch (err) {
    console.error(err.massage);
    return res.status(500).send("Server Error");
  }
};

//view vehicle coordinator list in employees page
const viewVCList = async (req, res) => {
  try {
    //db query
    const vcData = await pool.query(
      "SELECT * FROM registered_users WHERE user_role = 'vc'"
    );

    return res.json(vcData.rows);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

module.exports = { addEmployee, viewSupList, viewVCList };
