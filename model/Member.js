const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    Name: { type: String },
    Url: { type: String },
    image: { type: String },
    Active: { type: Boolean },
    createdby: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);

module.exports = mongoose.model("member", MemberSchema);
