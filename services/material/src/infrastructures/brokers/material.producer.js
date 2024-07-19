require("dotenv").config();
const BaseProducer = require("@base/infrastructures/brokers/base.producer");
const {
  MaterialTopic,
} = require("@material-module/domains/topics/material.topic");

class MaterialProducer extends BaseProducer {
  constructor() {
    super(MaterialTopic.CREATED, MaterialTopic.UPDATED, MaterialTopic.DELETED);
  }
}

module.exports = MaterialProducer;
