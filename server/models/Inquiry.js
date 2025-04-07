const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    type: {
      type: String,
      enum: ["student", "training_center", "other"],
      required: true,
    },
    age: {
      type: Number,
      min: 1,
      max: 100,
      validate: {
        validator: function (value) {
          // If type is "student", age must be provided (not null or 0)
          if (this.type === "student") {
            return value && value > 0;
          }
          return true; // Otherwise, allow null/0
        },
        message: "Age is required for students",
      },
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", InquirySchema);
