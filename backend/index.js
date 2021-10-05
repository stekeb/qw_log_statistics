express = require("express");
const router = require("./router");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const sequelize = require("./models/index");

app.use(express.json());
app.use(cors());
app.use(router);

(async () => {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
