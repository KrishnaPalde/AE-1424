const express = require("express");
const {
  getContactInfo,
  updateContactInfo,
} = require("../controllers/contactController");

const router = express.Router();
router.get("/", getContactInfo);
router.put("/", updateContactInfo);

module.exports = router;
