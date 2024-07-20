const { responseInternalServerError } = require("@helper/base.response.helper");

class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async getMany(params) {
    try {
      const page = parseInt(params.page, 10) || 1;
      const limit = parseInt(params.limit, 10) || 10;
      const offset = (page - 1) * limit;

      return await this.model.findAll({ limit, offset });
    } catch (err) {
      return responseInternalServerError(err);
    }
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (err) {
      return responseInternalServerError(err);
    }
  }

  async getOneById(id) {
    try {
      return await this.model.findByPk(id);
    } catch (err) {
      return responseInternalServerError(err);
    }
  }

  async updateByModel(model, data) {
    try {
      return await model.update(data);
    } catch (err) {
      return responseInternalServerError(err);
    }
  }

  async deleteById(id) {
    try {
      const record = await this.getOneById(id);
      return await record.destroy();
    } catch (err) {
      return responseInternalServerError(err);
    }
  }
}

module.exports = BaseRepository;
