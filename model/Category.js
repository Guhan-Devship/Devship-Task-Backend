const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
      title: { type: String, required: true},
      image: { data: Buffer},
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Category", CategorySchema);