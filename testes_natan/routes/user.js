const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router
    .route("/user")
    .get(userController.getAllUsers);

router
    .route("/user/:id")
    .get(userController.getOneUser);

module.exports = router;