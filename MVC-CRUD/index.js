const express=require('express');

const port=9999;

const app=express();
const database=require('./config/database');
const admins=require('./models/table');

app.use(express.urlencoded());

app.set("view engine","ejs");
app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log("server not started..");
    }
    console.log("server started at :- "+ port);
});