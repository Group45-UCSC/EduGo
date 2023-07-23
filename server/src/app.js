const express = require("express");
const cors = require("cors");

const app = express();

//middleware
app.use(express.json());
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
const jwtAuthRoutes = require("./routes/jwtAuth");

//define routes to use in app
app.use("/api/admin", adminRouter);
app.use("/api/driver", driverRouter);
app.use("/api/parent", parentRoutes);
app.use("api/supAgent", supAgentRoutes);
app.use("/api/vc", vcRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", jwtAuthRoutes);

//export object
module.exports = app;
