const { responseBadRequest } = require("@helper/base.response.helper");
const { body, param, validationResult, query } = require("express-validator");

const validateCreateUser = [
  body("name").isString().withMessage("Name must be a string"),
  body("type")
    .isIn(["customer", "vendor"])
    .withMessage("Invalid type value. Available type is customer and vendor."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(responseBadRequest(errors.array()));
    }
    next();
  },
];

const validateGetUserById = [
  param("id").isUUID().withMessage("Invalid user ID"),
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

module.exports = { validateCreateUser, validateGetUserById, validateIndex };
