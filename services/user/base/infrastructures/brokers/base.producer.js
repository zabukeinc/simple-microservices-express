const producer = require("@kafka/producer");

class BaseProducer {
  constructor(createdTopic, updatedTopic, deletedTopic) {
    this.createdTopic = createdTopic;
    this.updatedTopic = updatedTopic;
    this.deletedTopic = deletedTopic;
  }

  /**
   * @param {Object} message 
   */
  async created(data) {
    await producer.connect();
    await producer.sendMessage(this.createdTopic, JSON.stringify(data));
    console.log(`Triggered ${this.createdTopic}`)
  }

  /**
   * 
   * @param {Object} param0 
   * @param {Object} param1 
   */
  async updated({ data, old }) {
    await producer.connect();
    await producer.sendMessage(this.updatedTopic, JSON.stringify({ data, old }));
    console.log(`Triggered ${this.updatedTopic}`)
  }

  /**
   * @param {Object} message 
   */
  async deleted(data) {
    await producer.connect();
    await producer.sendMessage(this.deletedTopic, JSON.stringify(data));
    console.log(`Triggered ${this.deletedTopic}`)
  }

}

module.exports = BaseProducer;