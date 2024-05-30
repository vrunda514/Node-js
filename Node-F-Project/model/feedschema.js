const mongoose=require('mongoose');

const feedbk=mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    feed:{
        type:String,
        required:true
    }
})
const fschm=mongoose.model('fschm',feedbk);

module.exports=fschm;