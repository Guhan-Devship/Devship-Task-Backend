const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    client: { type: String },
    title: { type: String },
    image: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    offerPrice: { type: Number },
    customerAddress: { type: String },
    shipAddress: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
