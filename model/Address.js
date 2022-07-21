const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  client: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  pincode: { type: Number },
  billingAddress: { type: Boolean, default: false },
});

module.exports = mongoose.model("address", AddressSchema);
