const express = require("express");
const {
  createCart,
  getCart,
  deleteCart,
} = require("../controllers/CartControl");
const router = express.Router();

router.route("/createCart").post(createCart);
router.route("/getCart").get(getCart);
router.route("/deleteCart/:id").delete(deleteCart);

module.exports = router;
