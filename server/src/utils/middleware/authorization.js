const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


const authorize = async(req, res, next) => {
    try {

        const jwtToken = req.header("token");

        if(!jwtToken){
            return res.status(403).json("Not Authorize");
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = payload.user;
        
    } catch (err) {
        console.error(err.message);
        return res.status(403).json("You are not authorized to access this page");
        
    }

    next();
};


module.exports = authorize;