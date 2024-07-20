const BaseController = require("@base/infrastructures/http/base.controller");
const TransactionService = require("@transaction-module/applications/services/transaction.service");

class TransactionController extends BaseController {
  constructor() {
    super(new TransactionService());
    this.index = this.index.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.getOneById = this.getOneById.bind(this);
  }
}

module.exports = TransactionController;
