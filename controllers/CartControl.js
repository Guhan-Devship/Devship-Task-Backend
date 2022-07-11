const Cart = require("../model/Cart");

const createCart = async (req, res) => {
  try {
    const List = new Cart({
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

module.exports = { createCart, getCart, deleteCart };
