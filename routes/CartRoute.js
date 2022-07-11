const express = require("express");
const {
  createCart,
  getCart,
  deleteCart,
} = require("../controllers/CartControl");
const authenticate = require("../Middleware/authenticate");
const router = express.Router();

router.route("/createCart").post(authenticate, createCart);
router.route("/getCart").get(authenticate, getCart);
router.route("/deleteCart/:id").delete(authenticate, deleteCart);

module.exports = router;
