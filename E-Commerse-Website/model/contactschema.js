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
    number:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const contbl=mongoose.model("contbl",conschema);

module.exports=contbl;