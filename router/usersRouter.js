// external imports
const express = require("express");
const { check } = require("express-validator");

// internal imports
const {
  getUsers,
  addUser
} = require("../controller/usersController");

const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const pictureUpload = require("../middlewares/users/pictureUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");

const router = express.Router();

// users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post(
  "/",
  pictureUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);



module.exports = router;