const BaseService = require("@base/applications/services/base.service");
const { generateCode } = require("@helper/code.generator");
const TransactionRepository = require("@transaction-module/applications/repositories/transaction.repository");
const UserRepository = require("@transaction-module/applications/repositories/user.repository");
const MaterialRepository = require("@transaction-module/applications/repositories/material.repository");
const {
  responseBadRequest,
  responseOK,
} = require("@helper/base.response.helper");

class TransactionService extends BaseService {
  constructor() {
    super(new TransactionRepository());

    this.transactionRepo = new TransactionRepository();
    this.userRepository = new UserRepository();
    this.materialRepository = new MaterialRepository();

    this.index = this.index.bind(this);
    this.getOneById = this.getOneById.bind(this);
    this.create = this.create.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  /** Override base to add logic */
  async create(data) {
    try {
      const validated = await this.validateRelationData(data);
      if (!validated.success) return validated;

      let counted = await this.transactionRepo.count();
      const code = generateCode("TRX-", ++counted);
      Object.assign(data, { code });

      return await super.create(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  /** Override base to add logic */
  async updateById(id, data) {
    try {
      const validated = await this.validateRelationData(data);
      if (!validated.success) return validated;
  
      return await super.updateById(id, data);  
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async validateRelationData(data) {
    const userId = data?.customerId || data?.vendorId;
    const materialId = data.materialId;

    const promises = [];

    promises.push(
      this.materialRepository.getOneById(materialId),
      this.userRepository.getOneById(userId),
    );

    const promised = await Promise.all(promises);

    if (!promised[0]) {
      return responseBadRequest("Material data is not exist on trx service.");
    }

    if (!promised[1]) {
      return responseBadRequest("User data is not exist on trx service.");
    }

    return responseOK();
  }
}

module.exports = TransactionService;
