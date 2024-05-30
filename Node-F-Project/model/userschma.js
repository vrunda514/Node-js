const mongoose=require('mongoose');

const usrgtbl=mongoose.Schema({
    name:{
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

const uschema=mongoose.model('uschema',usrgtbl);

module.exports=uschema;