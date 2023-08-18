//db connection
const pool = require("../../dbConnection");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../uploads/"); // Replace with your actual upload directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

const addDeposit = async (req, res) => {
  try {
    const userId = req.params.userId;

    //1. destructure the req.body(name, email, password)
    const { depositedAmount, depositedDate, depositSlip } = req.body;

    //2. generate new vehicle id
    const lastDepositData = await pool.query(
      "SELECT * FROM cash_deposit ORDER BY deposit_id DESC LIMIT 1"
    );

    const lastDepositId = lastDepositData.rows[0]?.deposit_id || "DP0001";
    const numericPart = parseInt(lastDepositId.replace("DP", ""), 10); // Extract numeric part and convert to integer
    const newNumericPart = numericPart + 1;
    const newDepositId = `DP${newNumericPart.toString().padStart(4, "0")}`; // Generate new vehicle ID

    //3. insert the new vehicle inside our database
    const newDeposit = await pool.query(
      "INSERT INTO cash_deposit (deposit_id, driver_id, amount, date, month, slip_image, verify_status ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ",
      [
        newDepositId,
        userId,
        depositedAmount,
        depositedDate,
        "August",
        depositSlip,
        false,
      ]
    );
    //6. register success
    return res.json(newDeposit.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const uploadSlip = async (req, res) => {
  console.log("uploaded");
  console.log(req.file); //file.filename
  return res.json({
    filename: req.file.filename,
  });
};

module.exports = { addDeposit, uploadSlip };
