const mongoose =require("mongoose")

const userSchema =mongoose.Schema({
    name:{type:String},
    email:{type:String},
    mobile:{type:String},
    password:{type:String},
    isAdmin: {type: Boolean,default: false},
})

const User = mongoose.model('User',userSchema)
module.exports=User;