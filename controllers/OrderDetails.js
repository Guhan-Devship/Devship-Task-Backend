const Order = require("../model/order");

const createOrder = async (req, res) => {
  Order.insertMany(req.body)
    .then((orders) => {
      res.json({ message: "ordered", orders });
    })
    .catch((error) => {
      res.send(error);
    });
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

module.exports = { createOrder, getOrders };
