const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1/blog-passport");

const db=mongoose.connection;

db.on("connected",(err)=>{
    if(err)
    {
        console.log("database not connected..");
    }
    else{
        console.log("database  connected..");
    }
})

module.exports=db;