const app = require("./src/app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;

//server running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
