const express = require("express");
const {
  adminLogin,
  adminRegister,
  changePassword,
} = require("../controllers/authController");

const router = express.Router();
router.post("/login", adminLogin);
router.post("/register", adminRegister);
router.post("/change-password", changePassword);

module.exports = router;
