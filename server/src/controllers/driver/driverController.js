//db connection
const pool = require("../../dbConnection");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../uploads/driver"); // Replace with your actual upload directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const addVehicle = async (req, res) => {
  try {
    const userId = req.params.userId;

    //1. destructure the req.body(name, email, password)
    const {
      vehicleNum,
      vehicleType,
      vehicleModel,
      vehicleSeats,
      vehicleRegNum,
      vehicleRegDate,
      registrationDocumentImage,
    } = req.body;

    //2. generate new vehicle id
    const lastVehicleData = await pool.query(
      "SELECT * FROM vehicle ORDER BY vehicle_id DESC LIMIT 1"
    );

    const lastVehicleId = lastVehicleData.rows[0]?.vehicle_id || "VHC001";
    const numericPart = parseInt(lastVehicleId.replace("VHC", ""), 10); // Extract numeric part and convert to integer
    const newNumericPart = numericPart + 1;
    const newVehicleId = `VHC${newNumericPart.toString().padStart(3, "0")}`; // Generate new vehicle ID

    //3. insert the new vehicle inside our database
    const newVehicle = await pool.query(
      "INSERT INTO vehicle (vehicle_id, driver_id, vehicle_no, vehicle_type, vehicle_model, num_of_seats, registration_no, registration_date, condition_status, book_image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING * ",
      [
        newVehicleId,
        userId,
        vehicleNum,
        vehicleType,
        vehicleModel,
        vehicleSeats,
        vehicleRegNum,
        vehicleRegDate,
        "pending",
        registrationDocumentImage,
      ]
    );

    const newVehicleToDriver = await pool.query(
      "UPDATE driver SET has_vehicle = true WHERE user_id=  '" + userId + "'"
    );

    // Upload the registration document image
    // upload.single("registrationDocumentImage")(req, res, async function (err) {
    //   console.log("test");
    //   if (err) {
    //     console.error(err.message);
    //     return res.status(500).send("File Upload Error");
    //   }
    // });

    // const registrationDocumentImage = req.file ? req.file.path : null;
    // console.log(registrationDocumentImage);

    // Insert the new vehicle and image path into the database
    // const bookImg = await pool.query(
    //   "UPDATE vehicle SET book_image = $1 WHERE vehicle_id=  $2",
    //   [registrationDocumentImage, newVehicleId]
    // );

    //6. register success
    return res.json(newVehicle.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const uploadVehicle = async (req, res) => {
  console.log("uploaded");
  console.log(req.file); //file.filename
  return res.json({
    filename: req.file.filename,
  });
};

//get ride count function -> GET method
const hasRide = async (req, res) => {
  try {
    const userId = req.params.userId;

    const hasrideData = await pool.query(
      "SELECT has_ride FROM driver WHERE user_id =  '" + userId + "'"
    );

    const hasride = hasrideData.rows[0].has_ride;

    const hasVehicleData = await pool.query(
      "SELECT has_vehicle FROM driver WHERE user_id =  '" + userId + "'"
    );

    const hasvehicle = hasVehicleData.rows[0].has_vehicle;

    // return res.json({ hasride });
    return res.json({ hasRide: hasride, hasVehicle: hasvehicle });

    // res.status(200).Json({
    //   status: "success",
    //   data: "It is working",
    // });
  } catch (err) {
    console.log(err.message);
  }
};

const viewVehicle = async (req, res) => {
  try {
    const userId = req.params.userId;

    const query = "SELECT * FROM vehicle WHERE driver_id=  '" + userId + "'"; // Replace with your actual table name
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { hasRide, addVehicle, viewVehicle, uploadVehicle };

// app.get('/driver/ride/hasRide', (req, res) => {
//   // Your logic to check if the driver has a ride
//   const hasRide = true; // Change this based on your actual logic

//   res.json({ hasRide });
// });
// ... (other imports and setup)
