const express = require("express");
const {
  createCart,
  getCart,
  deleteCart,
  updateCart,
} = require("../controllers/CartControl");
const authenticate = require("../Middleware/authenticate");
const router = express.Router();

router.route("/createCart").post(authenticate, createCart);
router.route("/updateCart/:id").put(updateCart);
router.route("/getCart").get(authenticate, getCart);
router.route("/deleteCart/:id").delete(authenticate, deleteCart);

module.exports = router;
