const mongoose = require("mongoose");

const ShippingAddressSchema = new mongoose.Schema({
  client: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  pincode: { type: Number },
  shippingAddress: { type: Boolean, default: false },
});

module.exports = mongoose.model("shipping", ShippingAddressSchema);
