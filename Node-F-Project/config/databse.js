const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1/finalproject");

const db=mongoose.connection;

db.on("connected",(err)=>{
    if(err)
    {
        console.log("database not started..");
    }
    console.log("database started..");
})

module.export=db;