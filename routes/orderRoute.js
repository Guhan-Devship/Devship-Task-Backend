const express = require("express");
const { createOrder, getOrders } = require("../controllers/OrderDetails");
const authenticate = require("../Middleware/authenticate");
const router = express.Router();

router.route("/createOrder").post(authenticate, createOrder);
router.route("/getOrders").get(authenticate, getOrders);

module.exports = router;
