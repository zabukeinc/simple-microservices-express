const express = require("express");
const {
  validateIndex,
  validateCreateTransaction,
  validateGetTransactionById,
  validateUpdateTransaction,
} = require("@transaction-module/infrastructures/validators/transaction.dto");
const TransactionController = require("@transaction-module/infrastructures/http/transaction.controller");

const router = express.Router();

const controller = new TransactionController();

router.get("/", validateIndex, controller.index);
router.post("/", validateCreateTransaction, controller.create);
router.put("/:id", validateUpdateTransaction, controller.update);
router.get("/:id", validateGetTransactionById, controller.getOneById);
router.delete("/:id", validateGetTransactionById, controller.delete);

module.exports = router;
