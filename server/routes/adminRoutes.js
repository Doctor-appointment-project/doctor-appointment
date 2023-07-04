const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middleware/authMiddleware");

const rout = express.Router();

//GET METHOD || USERS
rout.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
rout.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//POST ACCOUNT STATUS
rout.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports=rout;