const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
    price: { type: Number },
    offerPrice: { type: Number },
    createdby: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
