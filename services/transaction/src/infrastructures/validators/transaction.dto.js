const { responseBadRequest } = require("@helper/base.response.helper");
const { body, param, validationResult, query } = require("express-validator");

const validateCreateTransaction = [
  body("vendorId")
    .optional({ nullable: true })
    .isUUID()
    .withMessage("Invalid Vendor ID")
    .bail()
    .custom((value, { req }) => {
      if (value && req.body.customerId) {
        throw new Error(
          "vendorId should be null or empty if customerId is filled",
        );
      }
      return true;
    }),
  body("customerId")
    .optional({ nullable: true })
    .isUUID()
    .withMessage("Invalid Customer ID")
    .bail()
    .custom((value, { req }) => {
      if (value && req.body.vendorId) {
        throw new Error(
          "customerId should be null or empty if vendorId is filled",
        );
      }
      return true;
    }),
  body("materialId").isUUID().withMessage("Material ID is required"),
  body("date").isISO8601().withMessage("Date must be provided"),
  body("materialName").notEmpty().withMessage("Material Name must be provided"),
  body("customerName")
    .optional({ nullable: true })
    .isString()
    .withMessage("Customer Name must be a string"),
  body("vendorName")
    .optional({ nullable: true })
    .isString()
    .withMessage("Vendor Name must be a string"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(responseBadRequest(errors.array()));
    }
    next();
  },
];

const validateUpdateTransaction = [
  param("id").isUUID().withMessage("Invalid Transaction ID"),
  body("vendorId")
    .optional({ nullable: true })
    .isUUID()
    .withMessage("Invalid Vendor ID")
    .bail()
    .custom((value, { req }) => {
      if (value && req.body.customerId) {
        throw new Error(
          "vendorId should be null or empty if customerId is filled",
        );
      }
      return true;
    }),
  body("customerId")
    .optional({ nullable: true })
    .isUUID()
    .withMessage("Invalid Customer ID")
    .bail()
    .custom((value, { req }) => {
      if (value && req.body.vendorId) {
        throw new Error(
          "customerId should be null or empty if vendorId is filled",
        );
      }
      return true;
    }),
  body("materialId").isUUID().withMessage("Material ID is required"),
  body("date").isISO8601().withMessage("Date must be provided"),
  body("materialName").notEmpty().withMessage("Material Name must be provided"),
  body("customerName")
    .optional({ nullable: true })
    .isString()
    .withMessage("Customer Name must be a string"),
  body("vendorName")
    .optional({ nullable: true })
    .isString()
    .withMessage("Vendor Name must be a string"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(responseBadRequest(errors.array()));
    }
    next();
  },
];

const validateGetTransactionById = [
  param("id").isUUID().withMessage("Invalid Transaction ID"),
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
  validateCreateTransaction,
  validateUpdateTransaction,
  validateGetTransactionById,
  validateIndex,
};
