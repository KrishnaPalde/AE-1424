/**
 * One-time migration: move every image currently hosted on Firebase Storage
 * to Cloudinary, and update the corresponding MongoDB records in place.
 *
 * Usage:
 *   node scripts/migrateFirebaseToCloudinary.js            # migrate DB-referenced images
 *   node scripts/migrateFirebaseToCloudinary.js --dry-run   # report only, no writes
 *
 * Safe to re-run: any record whose URL no longer contains
 * "firebasestorage.googleapis.com" is skipped.
 */
require("dotenv").config();
const mongoose = require("mongoose");
const axios = require("axios");
const cloudinary = require("../utils/cloudinary");

const DRY_RUN = process.argv.includes("--dry-run");

const Banner = require("../models/Banner");
const Logo = require("../models/Logo");
const Gallery = require("../models/Gallary");
const Service = require("../models/Service");

const isFirebaseUrl = (url) =>
  typeof url === "string" && url.includes("firebasestorage.googleapis.com");

async function uploadBufferToCloudinary(buffer, folder) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: `aartieducare/${folder}`, resource_type: "image" },
      (error, result) => (error ? reject(error) : resolve(result))
    );
    stream.end(buffer);
  });
}

async function migrateUrl(url, folder) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data);
  const result = await uploadBufferToCloudinary(buffer, folder);
  return result.secure_url;
}

const summary = { migrated: 0, skipped: 0, failed: 0 };

async function migrateCollection(Model, field, folder, label) {
  const docs = await Model.find({ [field]: { $regex: "firebasestorage.googleapis.com" } });
  console.log(`\n${label}: ${docs.length} document(s) with a Firebase image`);

  for (const doc of docs) {
    const oldUrl = doc[field];
    try {
      if (!isFirebaseUrl(oldUrl)) {
        summary.skipped++;
        continue;
      }
      console.log(`  → migrating ${doc._id}...`);
      if (DRY_RUN) {
        console.log(`    (dry-run) would upload ${oldUrl}`);
        summary.migrated++;
        continue;
      }
      const newUrl = await migrateUrl(oldUrl, folder);
      doc[field] = newUrl;
      await doc.save();
      console.log(`    ✓ ${newUrl}`);
      summary.migrated++;
    } catch (err) {
      console.error(`    ✗ failed for ${doc._id}:`, err.message);
      summary.failed++;
    }
  }
}

async function main() {
  console.log(DRY_RUN ? "Running in DRY-RUN mode (no writes)" : "Running LIVE — this will write to the database");
  await mongoose.connect(process.env.URL);
  console.log("Connected to MongoDB");

  await migrateCollection(Banner, "imageUrl", "banners", "Banners");
  await migrateCollection(Logo, "imageUrl", "logos", "Logos");
  await migrateCollection(Gallery, "image", "gallery", "Gallery items");
  await migrateCollection(Service, "image", "services", "Services");

  console.log("\n--- Summary ---");
  console.log(summary);

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
