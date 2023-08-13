// //db connection
const pool = require("../../dbConnection");
// // const query = require("../../models/userModel");

//password security
const bcrypt = require("bcrypt");
var session = require("express-session");

// //session handling
// import session from "express-session";

// //cookies
// import cookieParser from "cookie-parser";

// //jwtGenerator
// const jwtGenerator = require("../../utils/jwtGenerator");

// //----------------------user register function----------------------------------------------------------------------
// const register = async (req, res) => {
//   try {
//     //1. destructure the req.body(name, email, password)

//     const { name, email, password } = req.body;

//     //2. check if user exist(if exist then throw error)

//     const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
//       email,
//     ]);

//     if (user.rows.length !== 0) {
//       return res.status(401).json("User already exists");
//     }

//     //3. Bcrypt the user password

//     const saltRound = 10;
//     const salt = await bcrypt.genSalt(saltRound);

//     const bcryptPassword = await bcrypt.hash(password, salt);

//     //4. enter the new user inside our database

//     const newUser = await pool.query(
//       "INSERT INTO users (user_name,user_email,user_password) VALUES($1,$2,$3) RETURNING * ",
//       [name, email, bcryptPassword]
//     );

//     // res.json(newUser.rows[0]);

//     //5. generating our jwt token

//     const token = jwtGenerator(newUser.rows[0].user_id);

//     res.json({ token });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };

// //----------------------user login function----------------------------------------------------------------------

// const login = async (req, res) => {
//   try {
//     //1. destructure the req.body(email, password)

//     const { email, password } = req.body;

//     //2. check if user doesn't exist(if not then throw error)

//     const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
//       email,
//     ]);

//     if (user.rows.length === 0) {
//       return res.status(401).json("User Not Found");
//     }

//     // 3. check if incoming password is the same as the db password

//     const validPassword = await bcrypt.compare(
//       password,
//       user.rows[0].user_password
//     );

//     // console.log(validPassword);
// if (!validPassword) {
//   return res.status(401).json("Password Incorrect");
// }

//     // 4. give them the jwt token

//     const token = jwtGenerator(user.rows[0].user_id);

//     res.json({ token });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };

// //---------------logged user authorizing-----------------------

// const verify = async (req, res) => {
//   try {
//     // res.json(req.user);

//     const user = await pool.query(
//       "SELECT user_name FROM users WHERE user_id = $1",
//       [req.user]
//     );

//     res.json(user.rows[0]);
//   } catch (error) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };

// const is_verify = async (req, res) => {
//   try {
//     res.json(true);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };

// module.exports = { login, register, verify, is_verify };

//------------------------------------------------------------------------------------------------------------------------------------------

// const register = async (req, res) => {

//   const query =
//     "INSERT INTO register (id,name,email,tpnum,nic,password, reg_date) VALUES(?, ?, ?, ?, ?, ?, NOW())";
//   const values = [
//     1,
//     req.body.name,
//     req.body.email,
//     req.body.tpNum,
//     req.body.nic,
//     req.body.password,
//   ];
//   await pool.query(query, [values], (err, data) => {
//     if (err) {
//       return res.json(err);
//     }
//     return res.json(data);
//   });
// };

//parent registration function -> POST
const parentRegister = async (req, res) => {
  try {
    //1. destructure the req.body(name, email, password)
    const { name, email, tpNum, nic, password } = req.body;

    //2. check if user exist(if exist then throw error)
    const userdata = await pool.query(
      "SELECT * FROM registered_users WHERE user_email =   '" + email + "'"
    );

    if (userdata.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }

    //3.if doesn't exist, generate new user id
    const lastUserIdData = await pool.query(
      "SELECT * FROM parent ORDER BY user_id DESC LIMIT 1"
    );
    const lastUserId = lastUserIdData.rows[0]?.user_id || "PR0000"; // Default to PR0000 if no user_id found

    const numericPart = parseInt(lastUserId.replace("PR", ""), 10); // Extract numeric part and convert to integer
    const newNumericPart = numericPart + 1;
    const newUserId = `PR${newNumericPart.toString().padStart(4, "0")}`; // Generate new user ID

    //4. Bcrypt the user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    //5. enter the new user inside our database
    const newUser = await pool.query(
      "INSERT INTO registered_users (user_id, user_name, user_role, user_email, contact_number, nic, password, reg_date) VALUES ($1, $2, $3, $4, $5, $6, $7, Now()) RETURNING * ",
      [newUserId, name, "parent", email, tpNum, nic, bcryptPassword]
    );

    const newParent = await pool.query(
      "INSERT INTO parent (user_id, num_of_registered_children) VALUES($1,$2) RETURNING * ",
      [newUserId, 0]
    );

    //6. register success
    return res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//Driver registration function -> POST
const driverRegister = async (req, res) => {
  try {
    //1. destructure the req.body(name, email, password)
    const { name, email, tpNum, nic, password } = req.body;

    //2. check if user exist(if exist then throw error)
    const userdata = await pool.query(
      "SELECT * FROM registered_users WHERE user_email =   '" + email + "'"
    );

    if (userdata.rows.length !== 0) {
      return res.status(401).json("User already exists");
    }

    //3.if doesn't exist, generate new user id
    const lastUserIdData = await pool.query(
      "SELECT * FROM driver ORDER BY user_id DESC LIMIT 1"
    );
    const lastUserId = lastUserIdData.rows[0]?.user_id || "DRV000"; // Default to PR0000 if no user_id found

    const numericPart = parseInt(lastUserId.replace("DRV", ""), 10); // Extract numeric part and convert to integer
    const newNumericPart = numericPart + 1;
    const newUserId = `DRV${newNumericPart.toString().padStart(3, "0")}`; // Generate new user ID

    //4. Bcrypt the user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    //5. enter the new user inside our database
    const newUser = await pool.query(
      "INSERT INTO registered_users (user_id, user_name, user_role, user_email, contact_number, nic, password, reg_date) VALUES ($1, $2, $3, $4, $5, $6, $7, Now()) RETURNING * ",
      [newUserId, name, "driver", email, tpNum, nic, bcryptPassword]
    );

    const newDriver = await pool.query(
      "INSERT INTO driver (user_id) VALUES($1) RETURNING * ",
      [newUserId]
    );

    //6. register success
    return res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const login = async (req, res) => {
  try {
    //1. destructure the req.body(email, password)
    const { email, password } = req.body;

    //2. check if user doesn't exist(if not then throw error)

    const userdata = await pool.query(
      "SELECT * FROM registered_users WHERE user_email =   '" + email + "'"
    );

    if (userdata.rows.length === 0) {
      return res.status(401).json("User Not Found");
    }

    // 3. check if incoming password is the same as the db password

    const validPassword = await bcrypt.compare(
      password,
      userdata.rows[0].password
    );

    if (!validPassword) {
      return res.status(402).json("Password Incorrect");
    }

    //4. login success
    // req.session.username = user.rows[0].name;
    // req.session.useremail = user.rows[0].email;
    // console.log(req.session.username);

    return res.json({ Login: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const isAuth = async (req, res) => {
  try {
    // console.log("Session username:", req.session.username);
    if (req.session.username) {
      return res.json({ valid: true, username: req.session.username });
    } else {
      return res.json({ valid: false });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { parentRegister, driverRegister, login, isAuth };
