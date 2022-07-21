const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    client: { type: String },
    title: { type: String },
    image: { type: String },
    price: { type: Number },
    offerPrice: { type: Number },
    quantity: { type: Number, default: 1 },
    createdby: { type: mongoose.Schema.Types.ObjectId },
    customerAddress: { type: String },
    shipAddress: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
