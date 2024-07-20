require("dotenv").config();
require("module-alias/register");
const express = require("express");
const sequelize = require("@database/database");
const app = express();
const bodyParser = require("body-parser");

const transactionRoute = require("@transaction-module/infrastructures/routes/transaction.route");
const MaterialConsumer = require("@transaction-module/infrastructures/brokers/material.consumer");
const UserConsumer = require("@transaction-module/infrastructures/brokers/user.consumer");
app.use(express.json());
app.use(bodyParser.json());

// Database
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();

// Consumer
new MaterialConsumer().run();
new UserConsumer().run();

// Routes
app.get("/", (req, res) => {
  res.send("Hello World transaction!");
});

app.use("/transactions", transactionRoute);

const PORT = process.env.APP_PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`transaction Server running on port ${PORT}`),
);

process.on("SIGINT", () => {
  server.close();
  process.exit(0);
});
module.exports = app;
