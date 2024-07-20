const BaseService = require("@base/applications/services/base.service");
const MaterialRepository = require("@transaction-module/applications/repositories/material.repository");

class MaterialService extends BaseService {
  constructor() {
    super(new MaterialRepository());
    this.index = this.index.bind(this);
    this.getOneById = this.getOneById.bind(this);
    this.create = this.create.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }
}

module.exports = MaterialService;
