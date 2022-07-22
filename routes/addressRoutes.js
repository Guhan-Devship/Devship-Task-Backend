const express = require("express");
const {
  createAddress,
  updateAddress,
  deleteAddress,
  getAddressId,
  createShippingAddress,
  getShippingAddressId,
  deleteShipAddress,
  updateshipAddress,
} = require("../controllers/AddressControl");
const authenticate = require("../Middleware/authenticate");
const router = express.Router();

router.route("/createAddress/:userId").post(authenticate, createAddress);
router
  .route("/createShipAddress/:userId")
  .post(authenticate, createShippingAddress);
router.route("/updateAddress/:id").put(authenticate, updateAddress);
router.route("/updateShipAddress/:id").put(authenticate, updateshipAddress);
router.route("/getAddress/:id").get(authenticate, getAddressId);
router.route("/getShippingAddress/:id").get(authenticate, getShippingAddressId);
router.route("/deleteAddress/:id/:userId").delete(authenticate, deleteAddress);
router
  .route("/deleteShipAddress/:id/:userId")
  .delete(authenticate, deleteShipAddress);

module.exports = router;
