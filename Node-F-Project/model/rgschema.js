const mongoose=require('mongoose');

const rgtbl=mongoose.Schema({
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

const schema=mongoose.model('schema',rgtbl);

module.exports=schema;