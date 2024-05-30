const express=require('express');
const port=1000;


const database=require('./config/database');
const schema=require('./model/schema');
const faddtbl=require('./model/formschema');
const multer=require("multer");
const path=require("path");
const fs=require('fs');
const session = require('express-session');
const passport=require('passport');
const localauth = require('./middleware/localauth');
localauth(passport);

const app=express();
app.use(session({secret:"private-key"}));
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine","ejs");
app.use(express.urlencoded());
app.use(express.static('public'));
app.use('/',require('./routes/route'));
app.use("/upload",express.static("upload"));

app.listen(port,()=>{
    console.log("server started at :- "+ port);
})
