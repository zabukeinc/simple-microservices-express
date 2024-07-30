const express = require("express");
const {
  validateIndex,
  validateCreateMaterial,
  validateGetMaterialById,
  validateUpdateMaterial,
} = require("@material-module/infrastructures/validators/material.dto");
const MaterialController = require("@material-module/infrastructures/http/material.controller");

const router = express.Router();

const controller = new MaterialController();

router.get("/", validateIndex, controller.index);
router.post("/", validateCreateMaterial, controller.create);
router.put("/:id", validateUpdateMaterial, controller.update);
router.get("/:id", validateGetMaterialById, controller.getOneById);
router.delete("/:id", validateGetMaterialById, controller.delete);

module.exports = router;
