//db connection
const pool = require("../../dbConnection");
// const query = require("../../models/userModel");

//password security
const bcrypt = require("bcrypt");

//jwtGenerator
const jwtGenerator = require("../../utils/jwtGenerator");




//----------------------user register function----------------------------------------------------------------------
const register = async (req, res) => {
  try {

    //1. destructure the req.body(name, email, password)

    const { name, email, password } = req.body;
    

    //2. check if user exist(if exist then throw error)

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if(user.rows.length !==0){
      return res.status(401).send("User already exists");
    }


    //3. Bcrypt the user password

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);


    //4. enter the new user inside our database

    const newUser = await pool.query(
      "INSERT INTO users (user_name,user_email,user_password) VALUES($1,$2,$3) RETURNING * ",
      [name, email, bcryptPassword]
    );

    // res.json(newUser.rows[0]);


    //5. generating our jwt token

    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });



  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};






//----------------------user login function----------------------------------------------------------------------

const login = async (req, res) => {
  try {

    //1. destructure the req.body(email, password)

    const {email, password} = req.body;
  
    //2. check if user doesn't exist(if not then throw error)

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if(user.rows.length ===0){
      return res.status(401).json("User Not Found");
    }

    // 3. check if incoming password is the same as the db password

    const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

    // console.log(validPassword);
    if(!validPassword){
      return res.status(401).json("Password Incorrect");
    }


    // 4. give them the jwt token

    const token = jwtGenerator(user.rows[0].user_id);

    res.json({token});


  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};



//---------------logged user authorizing-----------------------

const verify = async(req,res) => {
  try {

    // res.json(req.user);

    const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [req.user]);
    
    res.json(user.rows[0]);

  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}




module.exports = { login, register, verify };
