const User = require("../model/User");
const Address = require("../model/Address");
const ShippingAddress = require("../model/ShippingAddress");

module.exports.createAddress = async (req, res) => {
  const userId = req.params.userId;
  const newAddress = new Address(req.body);

  try {
    const savedAddress = await newAddress.save();
    try {
      await User.findByIdAndUpdate(userId, {
        $push: { address: savedAddress._id },
      });
      res.status(200).json({ message: "address added", savedAddress });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateAddress = async (req, res) => {
  try {
    const updateAddress = await Address.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!req.billingAddress) {
      await Address.updateMany(
        {
          _id: { $ne: req.params.id },
          billingAddress: true,
        },
        { billingAddress: false }
      );
    }
    res.status(200).json(updateAddress);
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteAddress = async (req, res) => {
  const userId = req.params.userId;
  try {
    await Address.findByIdAndDelete(req.params.id);
    try {
      await User.findByIdAndUpdate(userId, {
        $pull: { address: req.params.id },
      });
      res.status(200).json("updated");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.getAddressId = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const list = await Promise.all(
      user.address.map((item) => {
        return Address.findById(item);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    console.log(err);
  }
};

module.exports.createShippingAddress = async (req, res) => {
  const userId = req.params.userId;
  const newAddress = new ShippingAddress(req.body);

  try {
    const savedAddress = await newAddress.save();
    try {
      await User.findByIdAndUpdate(userId, {
        $push: { shipping: savedAddress._id },
      });
      res.status(200).json({ message: "address added", savedAddress });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.getShippingAddressId = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const list = await Promise.all(
      user.shipping.map((item) => {
        return ShippingAddress.findById(item);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteShipAddress = async (req, res) => {
  const userId = req.params.userId;
  try {
    await ShippingAddress.findByIdAndDelete(req.params.id);
    try {
      await User.findByIdAndUpdate(userId, {
        $pull: { shipping: req.params.id },
      });
      res.status(200).json("updated");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateshipAddress = async (req, res) => {
  try {
    const updateShipAddress = await ShippingAddress.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!req.shippingAddress) {
      await ShippingAddress.updateMany(
        {
          _id: { $ne: req.params.id },
          shippingAddress: true,
        },
        { shippingAddress: false }
      );
    }
    res.status(200).json(updateShipAddress);
  } catch (err) {
    next(err);
  }
};
