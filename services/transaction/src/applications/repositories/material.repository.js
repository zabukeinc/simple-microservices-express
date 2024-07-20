const BaseRepository = require("@base/applications/repositories/base.repository");
const MaterialModel = require("@transaction-module/domains/models/material.model");

class MaterialRepository extends BaseRepository {
  constructor() {
    super(MaterialModel);
    this.getMany = this.getMany.bind(this);
    this.create = this.create.bind(this);
    this.getOneById = this.getOneById.bind(this);
    this.updateByModel = this.updateByModel.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }
}

module.exports = MaterialRepository;
