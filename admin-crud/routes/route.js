const express=require('express');
const route=express.Router();
const passport = require('passport');
const localauth = require("../middleware/localauth");
const fcontroller=require('../controller/fcontroller');
const multer=require('multer');
const path=require('path');
const fs=require('fs');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"upload/");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})
const upload=multer({storage:storage}).single('img');

route.get('/',fcontroller.login);
route.get('/register',fcontroller.register);
route.get('/index',fcontroller.index);
route.post('/register',fcontroller.rgstradd);
route.post('/login',passport.authenticate("local"),fcontroller.lgnadd);
route.get("/form",fcontroller.form);
route.get("/table",fcontroller.table);
route.post("/insert",upload,fcontroller.adddata);
route.get("/delete",fcontroller.deletdata);
route.get("/edit",fcontroller.editdata);
route.post("/update",upload,fcontroller.updatedata);

module.exports=route;