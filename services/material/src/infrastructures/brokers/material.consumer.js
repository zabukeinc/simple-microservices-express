const BaseConsumer = require("@base/infrastructures/brokers/base.consumer");
const {
  MaterialTopic,
} = require("@material-module/domains/topics/material.topic");

class MaterialConsumer extends BaseConsumer {
  constructor() {
    super({ groupId: "material-service-consumer" });
    this.invoke();
  }

  async run() {
    const materialTopics = Object.values(MaterialTopic);
    const eachMessageCallback = async ({ topic, partition, message }) => {
      try {
        switch (topic) {
          case MaterialTopic.CREATED:
            await this.onCreated(topic, message);
            break;
          case MaterialTopic.UPDATED:
            await this.onUpdate(topic, message);
            break;
          case MaterialTopic.DELETED:
            await this.onDelete(topic, message);
            break;
          default:
            console.error("No Topic Found");
        }
      } catch (err) {
        console.error(`An error on consumer ${topic}`);
        console.error(err);
      }
    };

    super.run(materialTopics, eachMessageCallback);
  }

  async onCreated(topic, message) {
    const decoded = JSON.parse(message.value);
    console.log(
      `Consuming ${topic} on Material Service => Data ${message.value}`,
    );
  }

  async onUpdate(topic, message) {
    const { data, old } = JSON.parse(message.value);
    console.log(
      `Consuming ${topic} on Material Service => Data ${message.value}`,
    );
  }

  async onDelete(topic, message) {
    const decoded = JSON.parse(message.value);
    console.log(
      `Consuming ${topic} on Material Service => Data ${message.value}`,
    );
  }
}

module.exports = MaterialConsumer;
