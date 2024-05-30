const express=require('express');

const port=1000;

const app=express();
const multer=require('multer');
const path=require('path');

const database=require('./config/databse');
const schema=require('./model/rgschema');
const cbunkschm=require('./model/cbunkschema');
const feedschema=require('./model/feedschema');
const userschma=require('./model/userschma');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.use(express.urlencoded());  
app.set("view engine","ejs");
app.use('/',require('./route/register'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/index",(req,res)=>{
    res.render('index');
})

app.listen(port,(err)=>{
    if(err)
    {
        console.log("server not started..");
    }
    console.log("server  started at port :- " + port);
})