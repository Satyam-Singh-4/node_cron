const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./Configuration/db");
require("./Models/emp");
const router = require("./Router/router");
const cron = require("node-cron");
const controller = require("./Controllers/controller");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/", router);

sequelize.sync({ alter: true });

async function run() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    cron.schedule("*/20 * * * * *", controller.deleteUser);
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port no:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

run();
