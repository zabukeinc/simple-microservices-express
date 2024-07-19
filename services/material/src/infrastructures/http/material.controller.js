const BaseController = require("@base/infrastructures/http/base.controller");
const MaterialService = require("@material-module/applications/services/material.service");

class MaterialController extends BaseController {
  constructor() {
    super(new MaterialService());
    this.index = this.index.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.getOneById = this.getOneById.bind(this);
  }
}

module.exports = MaterialController;
