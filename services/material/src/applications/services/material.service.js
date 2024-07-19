const BaseService = require("@base/applications/services/base.service");
const MaterialRepository = require("@material-module/applications/repositories/material.repository");
const MaterialProducer = require("@material-module/infrastructures/brokers/material.producer");

class MaterialService extends BaseService {
  constructor() {
    super(new MaterialRepository(), new MaterialProducer());
    this.index = this.index.bind(this);
    this.getOneById = this.getOneById.bind(this);
    this.create = this.create.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }
}

module.exports = MaterialService;
