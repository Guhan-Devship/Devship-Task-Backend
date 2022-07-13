const express = require("express");
const {
  createNew,
  getCategory,
  deleteCategory,
  getProductId,
} = require("../controllers/Category");
const authenticate = require("../Middleware/authenticate");
const router = express.Router();

router.route("/createNew").post(authenticate, createNew);
router.route("/getall").get(getCategory);
router.route("/deleteData/:id").delete(authenticate, deleteCategory);
router.route("/viewData/:id").get(authenticate, getProductId);

module.exports = router;
