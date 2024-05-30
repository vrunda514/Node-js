// const { default: mongoose } = require('mongoose');
const mongoose=require('mongoose');

 mongoose.connect("mongodb://127.0.0.1/mvc-multer");

 const db=mongoose.connection;

 db.on('connected',(err)=>{
    if(err){
        console.log("database not connected..");
    }
    console.log("database  connected..");

 })

 module.exports=db;



