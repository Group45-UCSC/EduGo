const express = require("express");
const cors = require("cors");

const app = express();

//middleware
app.use(express.json());  //req.body
app.use(cors());

//database connection
// const pool = require("../src/dbConnection");

//import Routes
const adminRouter = require("./routes/adminRoutes");
const driverRouter = require("./routes/driverRoutes");
const parentRoutes = require("./routes/parentRoutes");
const supAgentRoutes = require("./routes/supAgentRoutes");
const vcRoutes = require("./routes/vcRoutes");
const userRoutes = require("./routes/userRoutes");
//register and login routes
// const jwtAuthRoutes = require("./routes/jwtAuth");

//define routes to use in app
app.use("/edugo/admin", adminRouter);
app.use("/edugo/driver", driverRouter);
app.use("/edugo/parent", parentRoutes);
app.use("edugo/supAgent", supAgentRoutes);
app.use("/edugo/vc", vcRoutes);
app.use("/edugo/user", userRoutes);
// app.use("/api/auth", jwtAuthRoutes);

//export object
module.exports = app;
