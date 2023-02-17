const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers); //first method (in this you can chain the get post put delete)

router.post("/login", authUser); //second method (in this you cannot chain the methods)

module.exports = router;
