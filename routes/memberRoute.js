const express = require("express");
const {
  createMember,
  getMember,
  updateMember,
  getMemberId,
  deleteMember,
} = require("../controllers/MemberControl");
const authenticate = require("../Middleware/authenticate");
const router = express.Router();

router.route("/createMember").post(createMember);
router.route("/getMember").get(getMember);
router.route("/getMember/:id").get(getMemberId);
router.route("/updateMember/:id").put(updateMember);
router.route("/deleteMember/:id").delete(deleteMember);

module.exports = router;
