require('dotenv').config()
const BaseProducer = require("@base/infrastructures/brokers/base.producer");
const { UserTopic } = require('@user-module/domains/topics/user.topic');

class UserProducer extends BaseProducer {
  constructor() {
    super(
      UserTopic.CREATED,
      UserTopic.UPDATED,
      UserTopic.DELETED
    );
  }
}

module.exports = UserProducer