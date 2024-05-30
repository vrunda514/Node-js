const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1/Student");

const db=mongoose.connection;

db.on('connected',(err)=>{
    if(err)
    {
        console.log("database not coonected..");
    }
    console.log("database  coonected..");
});

module.exports=db;