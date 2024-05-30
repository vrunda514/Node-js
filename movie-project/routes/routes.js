const express=require('express');

const route=express.Router();

const multer=require('multer');

const icontroller=require('../cotrollers/icontroller');


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload=multer({storage:storage}).single('image');

route.get('/',icontroller.index);
route.get('/user',icontroller.user);
route.get('/admin',icontroller.admnpg);
route.post('/adlogin',icontroller.login);
route.post('/addmovie',upload,icontroller.addmdata);

module.exports=route;