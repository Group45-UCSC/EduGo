const query = require("../../models/parentModel");

//update child details function -> PUT method
const updateChild = async (req, res) => {
  try {
    res.status(200).Json({
      tatus: "success",
      data: "It is working",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {updateChild}