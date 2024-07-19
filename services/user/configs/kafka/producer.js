require('dotenv').config();
const { Kafka } = require('kafkajs');

// Kafka configuration
const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: [process.env.KAFKA_HOST],
});

const producer = kafka.producer();
const disconnectProducer = async () => {
  try {
    await producer.disconnect();
    console.log('Kafka Producer disconnected');
  } catch (err) {
    console.error('Failed to disconnect Kafka Producer:', err);
  }
};
class KafkaProducer {
  constructor() {
    if (KafkaProducer.instance) {
      return KafkaProducer.instance;
    }
    KafkaProducer.instance = this;
    this._connected = false;
  }

  async connect() {
    if (this._connected) return;

    try {
      await producer.connect();
      this._connected = true;
      console.log('Kafka Producer connected');
    } catch (error) {
      console.error('Failed to connect Kafka Producer:', error);
    }
  }

  async sendMessage(topic, messages) {
    if (!this._connected) {
      console.error('Kafka Producer is not connected');
      return;
    }

    try {
      await producer.send({
        topic,
        messages: [{ value: messages }],
      });
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  }

  async disconnect() {
    if (this._connected) {
      try {
        await producer.disconnect();
        this._connected = false;
        console.log('Kafka Producer disconnected');
      } catch (error) {
        console.error('Failed to disconnect Kafka Producer:', error);
      }
    }
  }
}

process.on('SIGINT', async () => {
  disconnectProducer();
});
process.on('SIGTERM', async () => {
  disconnectProducer();
});

module.exports = new KafkaProducer();
