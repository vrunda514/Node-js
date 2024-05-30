const mongoose=require('mongoose');

 const mtbl=mongoose.Schema({
    mname:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    director:{
        type:String,
        required:true,
    },
    actor:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    gerne:{
        type:String,
        required:true,
    },
    des:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    }
 })

 const movietbl=mongoose.model("movietbl",mtbl);

 module.exports=movietbl;