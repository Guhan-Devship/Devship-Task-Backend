const Todo =require('../model/Todo')
const User=require('../model/User')

const getList=async(req,res)=>{
    try {
        const list =await Todo.find({createdby:req.userId});

        if(list){
            res.json(list)
        }
    } catch (error) {
        console.log(error)
    }
}

const createList =async(req,res)=>{
    try {
        const List = new Todo({
            list:req.body.list,
            createdby:req.userId,
        })
        const createData=await List.save();
        if(createData){
            res.send({
                message:"added",
                createData})
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteList=async (req,res)=>{
    try {
        const List =  await Todo.findByIdAndDelete(req.params.id)
        if(List){
            res.send("deleted Successfully")
        }
    } catch (error) {
        console.log(error)
    }
}

const getUser =async(req,res)=>{
    try {
        const user =await User.find({});
        if(user){
            res.json(user)
        }
    } catch (error) {
        console.log(error)
    }
}
const deleteUser=async (req,res)=>{
    try {
        const user =  await User.findByIdAndDelete(req.params.id)
        if(user){
            res.send("deleted Successfully")
        }
    } catch (error) {
        console.log(error)
    }
}
const getUserId =async(req,res)=>{
    try {
        const user =await User.findById(req.params.id);
        if(user){
            res.json(user)
        }
    } catch (error) {
        console.log(error)
    }
}
const updateUser = async (req,res,next)=>{
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
}


module.exports={getList,createList,deleteList,getUser,deleteUser,getUserId,updateUser};