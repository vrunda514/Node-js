const express=require('express');

const route=express.Router();

const controller=require('../controller/regicontroller');
const multer=require('multer');

route.get('/',controller.mainpg);



// admin side .........

route.get('/login',controller.index);
route.get('/register',controller.rgstr);
route.post('/rgaddata',controller.rgadd);
route.post('/lgaddata',controller.lgadd);
route.get('/createbunk',controller.crtbunk);
route.post('/formvalid',controller.cbunkadd);
route.get('/updatebunk',controller.upbk);
route.get('/delete',controller.cdelbnk);
route.get('/edit',controller.cedtbnk);
route.post('/update',controller.cupdtbk);
route.get('/feedback',controller.feedb);
route.post('/addfeedback',controller.fbadd);
route.get('/showfdbk',controller.feedshow);
route.get('/deletedata',controller.feeddel);
route.get('/booking',controller.bookshow);

// user side .....

route.get('/uslogin',controller.usindex);
route.get('/usregister',controller.usrgstr);
route.post('/usrgaddata',controller.usrgadd);
route.post('/uslgaddata',controller.uslgadd);
route.get('/userindex',controller.usrindex);
route.get('/profile',controller.myprf);
route.get('/prfdel',controller.prfdel);
route.get('/ubook',controller.usrbk);




module.exports=route;