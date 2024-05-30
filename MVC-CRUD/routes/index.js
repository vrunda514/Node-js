const express=require('express');

const route=express.Router();


const admincontroller=require('../controller/admincontroller');

route.get('/',admincontroller.index);

route.post('/insertdata',admincontroller.adddata);
route.get('/deletedata',admincontroller.remove);
route.get('/editdata',admincontroller.edit);
route.post('/updatedata',admincontroller.update);
module.exports=route;

