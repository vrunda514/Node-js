const express=require('express');
const port=1010;

const database=require('./config/database');
const logintbl=require('./model/schema');
const conschema=require('./model/conschema');
const blogschema=require('./model/blogschema');
const multer=require('multer');
const path=require('path');
const fs=require('fs');
const session = require('express-session');
const passport=require('passport');
const localauth = require('./middleware/localauth');
localauth(passport);

const app=express();
app.use(session({secret:"private-key"}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.set('view engine','ejs');
app.use(express.urlencoded());
app.use(express.static('public'));
app.use('/',require('./route/froute'));

app.listen(port,(err)=>{
    if(err)
    {
        console.log("server not started..");
    }
    else{
        console.log("server started at :- "+ port);
    }
})