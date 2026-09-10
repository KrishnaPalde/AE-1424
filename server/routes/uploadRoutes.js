const express = require("express");
const multer = require("multer");
const { uploadImage, deleteImage } = require("../controllers/uploadController");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

// POST /api/upload  (multipart form field "image", optional "folder")
router.post("/", upload.single("image"), uploadImage);

// POST /api/upload/delete  ({ publicId } or { url })
router.post("/delete", deleteImage);

module.exports = router;
