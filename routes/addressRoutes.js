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

router.route("/createAddress/:userId").post(createAddress);
router.route("/createShipAddress/:userId").post(createShippingAddress);
router.route("/updateAddress/:id").put(updateAddress);
router.route("/updateShipAddress/:id").put(updateshipAddress);
router.route("/getAddress/:id").get(getAddressId);
router.route("/getShippingAddress/:id").get(getShippingAddressId);
router.route("/deleteAddress/:id/:userId").delete(deleteAddress);
router.route("/deleteShipAddress/:id/:userId").delete(deleteShipAddress);

module.exports = router;
