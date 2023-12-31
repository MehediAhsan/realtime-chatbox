// external imports
const express = require("express");
const { check } = require("express-validator");

// internal imports
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const pictureUpload = require("../middlewares/users/pictureUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");

const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

// users page
router.get("/", decorateHtmlResponse("Users"), checkLogin, getUsers);

// add user
router.post(
  "/",
  checkLogin,
  pictureUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

// remove user
router.delete("/:id", removeUser);

module.exports = router;