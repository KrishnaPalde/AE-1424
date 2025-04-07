const express = require("express");
const router = express.Router();
const {
  getLogos,
  createLogo,
  deleteLogo,
} = require("../controllers/logoController");

// GET all logos by category
router.get("/:category", getLogos);

// POST new logo under a category
router.post("/:category", createLogo);

// DELETE logo by ID
router.delete("/:category/:id", deleteLogo);

module.exports = router;
