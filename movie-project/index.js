const express=require('express');

const port=2000;

const path=require('path');


const database=require('./config/database');
const admin=require('./model/schema');
const movietbl=require('./model/mvaddschema');

const app=express();

app.use(express.urlencoded());

app.use(express.static('public'));
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/',require('./routes/routes'));
app.set("view engine","ejs");

app.listen(port,(err)=>{
    if (err){
        console.log("server not started..");
    }
    console.log("server started at:-" + port);
})