const { responseBadRequest } = require("@helper/base.response.helper");
const { body, param, validationResult, query } = require("express-validator");

const validateCreateMaterial = [
  body("name").isString().withMessage("Name must be a string"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(responseBadRequest(errors.array()));
    }
    next();
  },
];

const validateUpdateMaterial = [
  param("id").isUUID().withMessage("Invalid material ID"),
  body("name").isString().withMessage("Name must be a string"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(responseBadRequest(errors.array()));
    }
    next();
  },
];

const validateGetMaterialById = [
  param("id").isUUID().withMessage("Invalid material ID"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(responseBadRequest(errors.array()));
    }
    next();
  },
];

const validateIndex = [
  query("page")
    .isNumeric()
    .withMessage("Page must be provided with value integer!"),
  query("limit")
    .isNumeric()
    .withMessage("Limit must be provided with value integer!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(responseBadRequest(errors.array()));
    }
    next();
  },
];

module.exports = {
  validateCreateMaterial,
  validateUpdateMaterial,
  validateGetMaterialById,
  validateIndex,
};
