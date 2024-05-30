const mongoose=require('mongoose');

const tbl=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    page:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})
const admin=mongoose.model('admin',tbl);

module.exports=admin;