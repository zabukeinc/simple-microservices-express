const BaseRepository = require("@base/applications/repositories/base.repository");
const { responseInternalServerError } = require("@helper/base.response.helper");
const TransactionModel = require("@transaction-module/domains/models/transaction.model");

class TransactionRepository extends BaseRepository {
  constructor() {
    super(TransactionModel);
    this.getMany = this.getMany.bind(this);
    this.create = this.create.bind(this);
    this.getOneById = this.getOneById.bind(this);
    this.updateByModel = this.updateByModel.bind(this);
    this.deleteById = this.deleteById.bind(this);
    this.count = this.count.bind(this);
  }

  async count() {
    try {
      return await this.model.count();
    } catch (err) {
      return responseInternalServerError(err);
    }
  }
}

module.exports = TransactionRepository;
