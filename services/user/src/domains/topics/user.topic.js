require("dotenv").config();
const env = process.env.NODE_ENV;

const UserTopic = Object.freeze({
  CREATED: "queueing.user.created." + env,
  UPDATED: "queueing.user.updated." + env,
  DELETED: "queueing.user.deleted." + env,
});

module.exports = { UserTopic };
