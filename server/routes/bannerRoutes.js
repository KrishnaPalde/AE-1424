const express = require("express");
const {
  getBanners,
  createBanner,
  updateBanner,
  deleteBanner,
} = require("../controllers/bannerController");

const router = express.Router();

// ✅ Get all banners
router.get("/", getBanners);

// ✅ Create a new banner
router.post("/", createBanner);

// ✅ Update a banner by ID
router.put("/:id", updateBanner);

// ✅ Delete a banner by ID
router.delete("/:id", deleteBanner);

module.exports = router;
