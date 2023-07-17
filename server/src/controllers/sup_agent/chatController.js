//view complaints function
const viewAllComplaints = async (req, res) => {
  try {
    res.status(200).Json({
      tatus: "success",
      data: "It is working",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { viewAllComplaints };
