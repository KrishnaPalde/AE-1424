const mongoose = require("mongoose");

const LogoSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    category: {
      type: String,
      enum: ["government", "affiliated", "partners"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Logo", LogoSchema);
