const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router
    .route("/user")
    .get(userController.getAllUsers)
    .post(userController.insertOneUser)
    .post(userController.insertManyUser)

router
    .route("/user/:id")
    .get(userController.getOneUser)
    .patch(userController.updateByIdUser)

module.exports = router;