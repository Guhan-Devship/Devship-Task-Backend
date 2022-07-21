const Order = require("../model/order");

const createOrder = async (req, res) => {
  try {
    const List = new Order({
      client: req.body.client,
      title: req.body.title,
      image: req.body.image,
      price: req.body.price,
      offerPrice: req.body.offerPrice,
      quantity: req.body.quantity,
      customerAddress: req.body.customerAddress,
      shipAddress: req.body.shipAddress,
    });
    const createData = await List.save();
    if (createData) {
      res.send({
        message: "ordered",
        createData,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getOrders = async (req, res) => {
  try {
    const list = await Order.find();

    if (list) {
      res.json(list);
    }
  } catch (error) {
    console.log(error);
  }
};
const getOrderId = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.json(order);
    }
  } catch (error) {
    console.log(error);
  }
};
const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (order) {
      res.send("deleted Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createOrder, getOrders, getOrderId, deleteOrder };
