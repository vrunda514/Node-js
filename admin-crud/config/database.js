 const mongoose=require('mongoose');
 
 mongoose.connect("mongodb://127.0.0.1/admin-mvc-crud");

 const db=mongoose.connection;

 db.on("connected",()=>{
    console.log("data base connected..");
 })

 module.exports=db;