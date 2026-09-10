const cloudinary = require("../utils/cloudinary");

const ROOT_FOLDER = "aartieducare";

// Allow only simple, predictable sub-folders so callers can't write outside our namespace.
const ALLOWED_FOLDERS = ["logos", "banners", "services", "gallery", "misc"];

const sanitizeFolder = (folder) => {
  const parts = (folder || "misc")
    .toString()
    .split("/")
    .map((p) => p.trim().toLowerCase().replace(/[^a-z0-9_-]/g, ""))
    .filter(Boolean);

  if (parts.length === 0 || !ALLOWED_FOLDERS.includes(parts[0])) {
    return "misc";
  }
  return parts.join("/");
};

// Extracts the Cloudinary public_id (including sub-folders) from a delivery URL, e.g.
// https://res.cloudinary.com/<cloud>/image/upload/v12345/aartieducare/banners/abc123.webp
// -> aartieducare/banners/abc123
const extractPublicId = (url) => {
  if (!url || !url.includes("res.cloudinary.com")) return null;
  const afterUpload = url.split("/upload/")[1];
  if (!afterUpload) return null;
  const withoutVersion = afterUpload.replace(/^v\d+\//, "");
  const withoutQuery = withoutVersion.split(/[?#]/)[0];
  const withoutExt = withoutQuery.replace(/\.[a-zA-Z0-9]+$/, "");
  return withoutExt || null;
};

// ✅ Upload an image (multipart, field name "image") to Cloudinary
exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image file provided" });
    }

    const folder = `${ROOT_FOLDER}/${sanitizeFolder(req.body.folder)}`;

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder, resource_type: "image" },
        (error, uploadResult) => (error ? reject(error) : resolve(uploadResult))
      );
      uploadStream.end(req.file.buffer);
    });

    res.status(200).json({
      url: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ message: "Image upload failed", error: error.message });
  }
};

// ✅ Delete an image from Cloudinary, by publicId or by its Cloudinary URL
exports.deleteImage = async (req, res) => {
  try {
    const publicId = req.body.publicId || extractPublicId(req.body.url);

    if (!publicId) {
      // Nothing we recognise as a Cloudinary asset (e.g. a stray external URL) — nothing to do.
      return res.status(200).json({ message: "Not a Cloudinary asset, skipped" });
    }

    await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
    res.status(200).json({ message: "Image deleted" });
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    res.status(500).json({ message: "Image delete failed", error: error.message });
  }
};

exports.extractPublicId = extractPublicId;
