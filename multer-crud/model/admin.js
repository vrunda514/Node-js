const mongoose=require('mongoose');

const tbl=mongoose.Schema({
    sid:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    bod:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
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
    school:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})
const admin=mongoose.model('admin',tbl);

module.exports=admin;