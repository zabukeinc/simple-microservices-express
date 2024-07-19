require("dotenv").config();
const { Kafka } = require("kafkajs");

class BaseConsumer {
  constructor({ groupId }) {
    this.kafka = new Kafka({
      brokers: [process.env.KAFKA_HOST],
      clientId: process.env.KAFKA_CLIENT_ID,
    });
    this.consumer = this.kafka.consumer({ groupId });
  }

  async connect() {
    try {
      await this.consumer.connect();
      console.log("Kafka Consumer connected");
    } catch (err) {
      console.error("Failed to connect Kafka Consumer:", err);
    }
  }

  async disconnect() {
    try {
      await this.consumer.disconnect();
      console.log("Kafka Consumer disconnected");
    } catch (err) {
      console.error("Failed to disconnect Kafka Consumer:", err);
    }
  }

  async run(topics, eachMessageCallback) {
    try {
      await this.connect();
      await Promise.all(
        topics.map((topic) =>
          this.consumer.subscribe({ topic, fromBeginning: true }),
        ),
      );
      await this.consumer.run({ eachMessage: eachMessageCallback });
    } catch (err) {
      console.error("Failed to run Kafka Consumer:", err);
    }
  }

  invoke() {
    process.on("SIGTERM", () => this.disconnect());
    process.on("SIGINT", () => this.disconnect());
    process.on("uncaughtException", (error) =>
      console.error("Uncaught Exception:", error),
    );
    process.on("unhandledRejection", (error) =>
      console.error("Unhandled Rejection:", error),
    );
  }
}

module.exports = BaseConsumer;
