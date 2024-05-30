const mongoose=require('mongoose');

 const tbl=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
 })

 const admin=mongoose.model("admin",tbl);

 module.exports=admin;