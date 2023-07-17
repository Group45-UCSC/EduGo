const express = require("express");

const app = express();

app.use(express.json);

//database connection
const pool = require("../src/dbConnection");

//import Routes
const adminRouter = require("./routes/adminRoutes");
const driverRouter = require("./routes/driverRoutes");
const parentRoutes = require("./routes/parentRoutes");
const supAgentRoutes = require("./routes/supAgentRoutes");
const vcRoutes = require("./routes/vcRoutes");
const userRoutes = require("./routes/userRoutes");

//define routes to use in app
app.use("/api/admin", adminRouter);
app.use("/api/driver", driverRouter);
app.use("/api/parent", parentRoutes);
app.use("api/supAgent", supAgentRoutes);
app.use("/api/vc", vcRoutes);
app.use("/api/user", userRoutes);

//export object
module.exports = app;
