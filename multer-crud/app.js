const express=require("express");
const port=4000;
const app=express();
const multer=require('multer');
const path=require('path');
const fs=require('fs');

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,"public")))

app.set("view engine","ejs")

app.use("/",require("./routes/iroute"));

const database=require('./config/connect');


app.use('/uploads',express.static(path.join(__dirname,'uploads')))

app.set("view engine","ejs");

app.listen(port,(err)=>{
    if(err)
    {
        console.log("server not started...");
    }
    console.log("server started at :- "+ port);
})