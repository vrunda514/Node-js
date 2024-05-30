const express=require('express');

const port=2000;

const app=express();
const multer=require('multer');
const path=require('path');

const database=require("./config/database");
const schema=require('./model/rgschema');
const frmschma=require('./model/formschema');
const acschma=require('./model/adcatschema');
const contbl=require("./model/contactschema");

app.set("view engine","ejs");
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(express.static("views"));
app.use(express.static(path.join(__dirname,'public/admin')))
app.use(express.static("views/admin"));
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use("/",require("./route/routes"));



app.listen(port,(err)=>{
    if(err)
    {
        console.log("server not started..");
    }
    console.log("server  started at port :- " + port);
})
