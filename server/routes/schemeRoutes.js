const express = require("express");
const {
  getSchemes,
  createScheme,
  updateScheme,
  deleteScheme,
  getSchemeById,
} = require("../controllers/schemeController");

const router = express.Router();

// ✅ GET all schemes
router.get("/", getSchemes);

router.get("/:id", getSchemeById);

// ✅ CREATE a new scheme
router.post("/", createScheme);

// ✅ UPDATE a scheme by ID
router.put("/:id", updateScheme);

// ✅ DELETE a scheme by ID
router.delete("/:id", deleteScheme);

module.exports = router;
