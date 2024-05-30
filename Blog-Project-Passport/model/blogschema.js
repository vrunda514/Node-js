const mongoose=require('mongoose');

const blogschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    like:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})

const blogtbl=mongoose.model("blogtbl",blogschema);

module.exports=blogtbl;