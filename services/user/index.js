require("dotenv").config();
require("module-alias/register");
const express = require("express");
const sequelize = require("@database/database");
const app = express();
const bodyParser = require("body-parser");
const userRoute = require("@user-module/infrastructures/routes/user.route");
const UserConsumer = require("@user-module/infrastructures/brokers/user.consumer");

app.use(express.json());
app.use(bodyParser.json());

// Database
sequelize
  .authenticate()
  .then(() => console.log("Database connected."))
  .catch((err) => console.error("Unable to connect to the database:", err));

// Consumer
new UserConsumer().run();

// Routes
app.get("/", (req, res) => {
  res.send("Hello World User!");
});

app.use("/users", userRoute);

const PORT = process.env.APP_PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`User Server running on port ${PORT}`),
);

process.on("SIGINT", () => {
  server.close();
  process.exit(0);
});
module.exports = app;
