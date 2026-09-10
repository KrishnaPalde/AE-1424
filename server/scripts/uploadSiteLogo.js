/**
 * One-time: upload the static site logo (public/logo.webp) to Cloudinary and
 * print the resulting URL — used as LOGOURL in server/.env and as the
 * og:image in several frontend pages, replacing the old Firebase URL.
 *
 * Usage: node scripts/uploadSiteLogo.js
 */
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const cloudinary = require("../utils/cloudinary");

async function main() {
  const filePath = path.resolve(__dirname, "../../public/logo.webp");
  const buffer = fs.readFileSync(filePath);

  const result = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "aartieducare/misc", public_id: "site-logo", resource_type: "image", overwrite: true },
      (error, res) => (error ? reject(error) : resolve(res))
    );
    stream.end(buffer);
  });

  console.log("Uploaded site logo:");
  console.log(result.secure_url);
}

main().catch((err) => {
  console.error("Upload failed:", err);
  process.exit(1);
});
