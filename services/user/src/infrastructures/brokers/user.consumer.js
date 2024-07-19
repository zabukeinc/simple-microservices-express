const BaseConsumer = require("@base/infrastructures/brokers/base.consumer");
const { UserTopic } = require("@user-module/domains/topics/user.topic");

class UserConsumer extends BaseConsumer {
  constructor() {
    super({ groupId: "user-service-consumer" });
    this.invoke();
  }

  async run() {
    const userTopics = Object.values(UserTopic);
    const eachMessageCallback = async ({ topic, partition, message }) => {
      try {
        switch (topic) {
          case UserTopic.CREATED:
            await this.onCreated(topic, message);
            break;
          case UserTopic.UPDATED:
            await this.onUpdate(topic, message);
            break;
          case UserTopic.DELETED:
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

    super.run(userTopics, eachMessageCallback);
  }

  async onCreated(topic, message) {
    const decoded = JSON.parse(message.value);
    console.log(`Consuming ${topic} on User Service => Data ${message.value}`);
  }

  async onUpdate(topic, message) {
    const { data, old } = JSON.parse(message.value);
    console.log(`Consuming ${topic} on User Service => Data ${message.value}`);
  }

  async onDelete(topic, message) {
    const decoded = JSON.parse(message.value);
    console.log(`Consuming ${topic} on User Service => Data ${message.value}`);
  }
}

module.exports = UserConsumer;
