const BaseConsumer = require("@base/infrastructures/brokers/base.consumer");
const UserService = require("@transaction-module/applications/services/user.service");
const { UserTopic } = require("@transaction-module/domains/topics/user.topic");

class UserConsumer extends BaseConsumer {
  constructor() {
    super({ groupId: "User-service-consumer" });
    this.userService = new UserService();
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
    await this.userService.create(decoded);
    console.log(
      `Consuming ${topic} on Transaction Service => Data ${message.value}`,
    );
  }

  async onUpdate(topic, message) {
    const { data, old } = JSON.parse(message.value);
    await this.userService.updateById(old.id, data);
    console.log(
      `Consuming ${topic} on Transaction Service => Data ${message.value}`,
    );
  }

  async onDelete(topic, message) {
    const decoded = JSON.parse(message.value);
    await this.userService.deleteById(decoded.id);
    console.log(
      `Consuming ${topic} on Transaction Service => Data ${message.value}`,
    );
  }
}

module.exports = UserConsumer;
