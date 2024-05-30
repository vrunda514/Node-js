const mongoose=require('mongoose');

const actbl=mongoose.Schema({
    category:{
        type:String,
        required:true
    }
})

const acschma=mongoose.model('acschma',actbl);

module.exports=acschma;