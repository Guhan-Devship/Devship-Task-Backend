const express =require("express");
const { createNew, getCategory, deleteCategory, getProductId } = require("../controllers/Category");
const router = express.Router();

router.route('/createNew').post(createNew);
router.route('/getall').get(getCategory);
router.route('/deleteData/:id').delete(deleteCategory);
router.route('/viewData/:id').get(getProductId);

module.exports=router;