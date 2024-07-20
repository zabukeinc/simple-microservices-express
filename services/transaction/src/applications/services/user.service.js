const BaseService = require("@base/applications/services/base.service");
const UserRepository = require("@transaction-module/applications/repositories/user.repository");

class UserService extends BaseService {
  constructor() {
    super(new UserRepository());
    this.index = this.index.bind(this);
    this.getOneById = this.getOneById.bind(this);
    this.create = this.create.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }
}

module.exports = UserService;
