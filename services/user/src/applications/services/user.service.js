const BaseService = require('@base/applications/services/base.service');
const UserRepository = require('@user-module/applications/repositories/user.repository');
const UserProducer = require('@user-module/infrastructures/brokers/user.producer');

class UserService extends BaseService {
  constructor() {
    super(new UserRepository(), new UserProducer())
    this.index = this.index.bind(this);
    this.getOneById = this.getOneById.bind(this);
    this.create = this.create.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }
}

module.exports = UserService 