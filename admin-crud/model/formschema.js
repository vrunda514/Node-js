const mongoose=require('mongoose');

const faddtbl=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})

const ftbl=mongoose.model("ftbl",faddtbl);

module.exports=ftbl;