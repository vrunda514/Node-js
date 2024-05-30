const express = require('express');
const route = express.Router();
const controller = require("../controller/fcontroller");
const multer = require('multer');
const path = require('path');
const passport = require('passport');
const localauth = require("../middleware/localauth");



const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage}).single('image');



route.get('/',controller.login);
route.post('/login',passport.authenticate("local"),controller.loginadd);

route.get('/register',controller.register);
route.post('/register',controller.registeradd);
route.get('/about',controller.about);
route.get('/blog',controller.blog);
route.get('/contact',controller.contact);
route.post('/condata',controller.addcon);
route.post('/blogadd',upload,controller.blogadd);
route.get('/blogdelete',controller.blogdelete);
 
module.exports=route;