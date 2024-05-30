const mongoose=require('mongoose');


const conschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const conttbl=mongoose.model("conttbl",conschema);

module.exports=conttbl;