const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: String },
  password: { type: String },
  address: { type: [String], min: 0, max: 3 },
  shipping: { type: [String], min: 0, max: 3 },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
