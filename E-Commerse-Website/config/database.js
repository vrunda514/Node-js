const monngoose=require('mongoose');

monngoose.connect("mongodb://127.0.0.1/e-commerceweb");

const db=monngoose.connection;

db.on("connected",()=>{
    console.log("data base connected..");
})

module.exports=db;