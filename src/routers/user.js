const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const controller = new UserController();
router.get("/user", controller.getAll);
router.get("/user/:cpf", controller.get);
router.put("/user/:cpf", controller.put);
router.delete("/user/:cpf", controller.delete);
module.exports = router;
