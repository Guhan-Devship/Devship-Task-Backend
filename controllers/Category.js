const Category =require('../model/Category')
const fs = require('fs');

const createNew =async(req,res)=>{
    try {
        const List = new Category({
            title:req.body.title,
            image:req.body.image,
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

  const getCategory =async(req,res)=>{
    try {
        const product =await Category.find({});
        if(product){
            res.json(product)
        }
    } catch (error) {
        console.log(error)
    }
    
}
const getProductId =async(req,res)=>{
    try {
        const user =await Category.findById(req.params.id);
        if(user){
            res.json(user)
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteCategory=async (req,res)=>{
    try {
        const List =  await Category.findByIdAndDelete(req.params.id)
        if(List){
            res.send("deleted Successfully")
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports={createNew,getCategory,deleteCategory,getProductId};