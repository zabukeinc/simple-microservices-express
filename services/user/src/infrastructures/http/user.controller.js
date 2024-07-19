const BaseController = require('@base/infrastructures/http/base.controller');
const UserService = require('@user-module/applications/services/user.service');

class UserController extends BaseController {
  constructor() {
    super(new UserService())
    this.index = this.index.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.getOneById = this.getOneById.bind(this);
  }
}

module.exports = UserController 