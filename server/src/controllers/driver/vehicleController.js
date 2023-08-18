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
      "INSERT INTO vehicle (vehicle_id, driver_id, vehicle_no, vehicle_type, vehicle_model, num_of_seats, registration_no, registration_date,book_image, condition_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING * ",
      [
        newVehicleId,
        userId,
        vehicleNum,
        vehicleType,
        vehicleModel,
        vehicleSeats,
        vehicleRegNum,
        vehicleRegDate,
        registrationDocumentImage,
        "pending",
      ]
    );

    const newVehicleToDriver = await pool.query(
      "UPDATE driver SET has_vehicle = true WHERE user_id=  '" + userId + "'"
    );

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

const viewVehicleImg = async (req, res) => {
  try {
    const userId = req.params.userId;
    // const query =
    //   "SELECT book_image FROM vehicle WHERE driver_id=  '" + userId + "'"; // Replace with your actual table name
    // const result = await pool.query(query);

    const viewImgData = await pool.query(
      "SELECT book_image FROM vehicle WHERE driver_id=  '" + userId + "'"
    );

    const viewImg = viewImgData.rows[0].book_image;

    const base64ImageData = viewImg.toString('base64');
    const imgUrl = `data:image/jpeg;base64,${base64ImageData}`;

    // console.log(imgUrl);
    return res.json(imgUrl);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { addVehicle, uploadVehicle, viewVehicleImg };
