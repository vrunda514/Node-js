const mongoose=require('mongoose');

const fomtbl=mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'acschma'
    },
    product:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})

const frmschma=mongoose.model('frmschma',fomtbl);

module.exports=frmschma;