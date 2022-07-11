const User = require("../model/User");
const Token = require("../model/Token");
const sendEmail = require("../utils/Sendmail");
const crypto = require("crypto");
const Joi = require("joi");
const express = require("express");
const bcrypt = require("bcryptjs");

const forgotPassword = async (req, res) => {
  try {
    const schema = Joi.object({ email: Joi.string().email().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.json({ message: "user with given email doesn't exist" });

    let token = await Token.findOne({ userId: user._id });
    if (!token) {
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const link = `http://localhost:3000/resetpassword/${user._id}/${token.token}`;
    await sendEmail(user.email, "Password reset", link);

    res.json({
      status: true,
      message: "password reset link sent to your email account",
    });
  } catch (error) {
    res.json({ message: "An error occured" });
    console.log(error);
  }
};

const resetPassword = async (req, res) => {
  try {
    const schema = Joi.object({ password: Joi.string().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findById(req.params.userId);
    if (!user)
      return res.status(400).json({ message: "invalid link or expired" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token)
      return res.status(400).json({ message: "invalid link or expired" });
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    user.password = hashPassword;
    await user.save();
    await token.delete();

    res.json({
      status: true,
      message: "password reset sucessfully",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "error occured",
    });
    console.log(error);
  }
};
module.exports = { forgotPassword, resetPassword };
