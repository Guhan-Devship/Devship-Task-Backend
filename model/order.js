const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    offerPrice: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
