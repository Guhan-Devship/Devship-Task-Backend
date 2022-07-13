const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  countBymodel,
  updateProduct,
  deleteProduct,
  getProductId,
} = require("../controllers/ProductControl");
const authenticate = require("../Middleware/authenticate");

router.route("/createProduct").post(authenticate, createProduct);
router.route("/getallProduct").get(getProduct);
router.route("/updateProduct/:id").put(authenticate, updateProduct);
router.route("/getProduct/:id").get(authenticate, getProductId);
router.route("/deleteProduct/:id").delete(authenticate, deleteProduct);
router.route("/countByModel").get(authenticate, countBymodel);

module.exports = router;
