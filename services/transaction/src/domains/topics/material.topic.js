require("dotenv").config();
const env = process.env.NODE_ENV;

const MaterialTopic = Object.freeze({
  CREATED: "queueing.material.created." + env,
  UPDATED: "queueing.material.updated." + env,
  DELETED: "queueing.material.deleted." + env,
});

module.exports = { MaterialTopic };
