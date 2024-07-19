const BaseRepository = require("@base/applications/repositories/base.repository");
const UserModel = require("@user-module/domains/models/user.model");

class UserRepository extends BaseRepository {
  constructor() {
    super(UserModel);
    this.getMany = this.getMany.bind(this);
    this.create = this.create.bind(this);
    this.getOneById = this.getOneById.bind(this);
    this.updateByModel = this.updateByModel.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }
}

module.exports = UserRepository;
