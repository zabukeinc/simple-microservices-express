class BaseController {
  constructor(service) {
    this.service = service;
    this.index = this.index.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.getOneById = this.getOneById.bind(this);
  }

  /**
   * 
   * @param {Express.Request} request 
   * @param {Express.Response} response 
   */
  async index(request, response) {
    const result = await this.service.index(request.query);
    response.status(result.statusCode).send(result)
  }

  /**
   * 
   * @param {Express.Request} request 
   * @param {Express.Response} response 
   */
  async create(request, response) {
    const result = await this.service.create(request.body)
    response.status(result.statusCode).send(result)
  }

  /**
   * 
   * @param {Express.Request} request 
   * @param {Express.Response} response 
   */
  async update(request, response) {
    const result = await this.service.updateById(request.params.id, request.body)
    response.status(result.statusCode).send(result)
  }

  /**
   * 
   * @param {Express.Request} request 
   * @param {Express.Response} response 
   */
  async getOneById(request, response) {
    const result = await this.service.getOneById(request.params.id)
    response.status(result.statusCode).send(result)
  }

  async delete(request, response) {
    const result = await this.service.deleteById(request.params.id)
    response.status(result.statusCode).send(result)
  }
}

module.exports = BaseController 