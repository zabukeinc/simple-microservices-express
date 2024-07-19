const express = require("express");
const UserController = require("@user-module/infrastructures/http/user.controller");
const {
  validateCreateUser,
  validateGetUserById,
  validateIndex,
} = require("@user-module/infrastructures/validators/user.dto");
const router = express.Router();

const controller = new UserController();

router.get("/", validateIndex, controller.index);
router.post("/", validateCreateUser, controller.create);
router.put("/:id", validateCreateUser, controller.update);
router.get("/:id", validateGetUserById, controller.getOneById);
router.delete("/:id", validateGetUserById, controller.delete);

module.exports = router;
