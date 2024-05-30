const { default: mongoose } = require('mongoose');
const monggose=require('mongoose');

const tbl=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    } ,
    message:{
        type:String,
        required:true
    }   
})

const admins=mongoose.model('admins',tbl);

module.exports=admins;