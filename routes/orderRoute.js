const express = require("express");
const {
  createOrder,
  getOrders,
  getOrderId,
  deleteOrder,
} = require("../controllers/OrderDetails");
const authenticate = require("../Middleware/authenticate");
const router = express.Router();

router.route("/createOrder").post(authenticate, createOrder);
router.route("/getOrders").get(authenticate, getOrders);
router.route("/getOrder/:id").get(getOrderId);
router.route("/deleteOrder/:id").delete(deleteOrder);

module.exports = router;
