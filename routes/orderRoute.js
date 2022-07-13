const express = require("express");
const { createOrder, getOrders } = require("../controllers/OrderDetails");
const router = express.Router();

router.route("/createOrder").post(createOrder);
router.route("/getOrders").get(getOrders);

module.exports = router;
