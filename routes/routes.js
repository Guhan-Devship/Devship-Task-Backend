const express =require("express");
const { getList, createList, deleteList, getUser, deleteUser, getUserId, updateUser } = require("../controllers/TodoFunction");
const authenticate = require("../Middleware/authenticate");
const router = express.Router();


router.route('/getList').get(authenticate,getList);
router.route('/createList').post(authenticate,createList);
router.route('/deleteList/:id').delete(authenticate,deleteList);
router.route('/users').get(authenticate,getUser);
router.route('/user/:id').get(authenticate,getUserId);
router.route('/updateUser/:id').put(authenticate,updateUser);
router.route('/deleteUser/:id').delete(authenticate,deleteUser);

module.exports=router;