const Cart = require("../model/Cart");

const createCart = async (req, res) => {
  try {
    const List = new Cart({
      client: req.body.client,
      title: req.body.title,
      image: req.body.image,
      price: req.body.price,
      offerPrice: req.body.offerPrice,
      createdby: req.userId,
    });
    const createData = await List.save();
    if (createData) {
      res.send({
        message: "added to cart",
        createData,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getCart = async (req, res) => {
  try {
    const list = await Cart.find({ createdby: req.userId });

    if (list) {
      res.json(list);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteCart = async (req, res) => {
  try {
    const List = await Cart.findByIdAndDelete(req.params.id);
    if (List) {
      res.send("deleted Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateCart = async (req, res) => {
  try {
    const update = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(update);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createCart, getCart, deleteCart, updateCart };
