const express = require("express");
const router = express.Router();
const Gallery = require("../models/Gallary");

// Create a new gallery item
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newItem = new Gallery(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

// Get all gallery items
router.get("/", async (req, res) => {
  try {
    const items = await Gallery.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a gallery item
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a gallery item
router.delete("/:id", async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
