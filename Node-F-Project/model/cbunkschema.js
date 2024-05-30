const mongoose=require('mongoose');

const ctbunk=mongoose.Schema({
    bunk:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    battery:{
        type:String,
        required:true
    },
})
const cbunkschm=mongoose.model('cbunkschm',ctbunk);

module.exports=cbunkschm;