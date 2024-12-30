const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const controller = new UserController();
router.post("/user", controller.post);
router.get("/user/:id", controller.get);
router.put("/user/:id", controller.put);
router.delete("/user/:id", controller.delete);
module.exports = router;
