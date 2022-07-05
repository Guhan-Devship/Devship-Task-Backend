const mongoose =require("mongoose")


const TodoListSchema =mongoose.Schema({
    list:{type:String},
    createdby:{type:mongoose.Schema.Types.ObjectId}
})

const Todo = mongoose.model('List',TodoListSchema)
module.exports=Todo;