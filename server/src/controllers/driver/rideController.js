//view ride function -> GET method
const viewRide = async (req, res) => {
  try {
    res.status(200).Json({
      tatus: "success",
      data: "It is working",
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { viewRide };
