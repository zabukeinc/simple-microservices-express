const {
  responseNotFoundError,
  responseOK,
} = require("@helper/base.response.helper");
class BaseService {
  constructor(repository, kakfaProducer) {
    this.repository = repository;
    this.kafkaProducer = kakfaProducer;
  }

  async index(params) {
    try {
      const result = await this.repository.getMany(params);
      return responseOK(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async create(data) {
    try {
      const result = await this.repository.create(data);
      await this.kafkaProducer.created(result);
      return responseOK(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getOneById(id) {
    try {
      const result = await this.repository.getOneById(id);
      return responseOK(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async updateById(id, data) {
    try {
      const record = await this.repository.getOneById(id);
      if (!record) {
        return responseNotFoundError("Record not found.");
      }
      const result = await this.repository.updateByModel(record, data);
      this.kafkaProducer.updated({ data: result, old: record });
      return responseOK(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async deleteById(id) {
    try {
      const record = await this.repository.getOneById(id);
      if (!record) {
        return responseNotFoundError("Record not found.");
      }

      const result = await this.repository.deleteById(id);
      this.kafkaProducer.deleted(record);
      return responseOK(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

module.exports = BaseService;
