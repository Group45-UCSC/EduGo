const express = require("express");
const cors = require("cors");
var session = require("express-session");
// const pgSession = require("connect-pg-simple")(session);

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cookieParser());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: { sameSite: "none", secure: true, maxAge: 1000 * 60 * 60 * 24 }, //1day
  })
);

//middleware
app.use(express.json()); //req.body

// app.use(cors());
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );

//session handling
// const session = require("express-session");

// //cookies
// const cookieParser = require("cookie-parser");

// app.use(cookieParser());
// app.use(session({}));

//database connection
// const pool = require("../src/dbConnection");

//import Routes
const adminRouter = require("./routes/adminRoutes");
const driverRouter = require("./routes/driverRoutes");
const parentRoutes = require("./routes/parentRoutes");
const supAgentRoutes = require("./routes/supAgentRoutes");
const vcRoutes = require("./routes/vcRoutes");
const userRoutes = require("./routes/userRoutes");

//define routes to use in app
app.use("/edugo/admin", adminRouter);
app.use("/edugo/driver", driverRouter);
app.use("/edugo/parent", parentRoutes);
app.use("edugo/supAgent", supAgentRoutes);
app.use("/edugo/vc", vcRoutes);
app.use("/edugo/user", userRoutes);

//export object
module.exports = app;
