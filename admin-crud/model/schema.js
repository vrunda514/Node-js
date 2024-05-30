const mongoose=require('mongoose');

const table=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const admin=mongoose.model("admin",table);

module.exports=admin;
