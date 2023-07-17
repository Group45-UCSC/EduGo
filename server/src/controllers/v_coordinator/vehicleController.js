//view all rides function -> GET
const viewAllRides = (req, res) => {
  try {
    res.status(200).Json({
      tatus: "success",
      data: "It is working",
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { viewAllRides };