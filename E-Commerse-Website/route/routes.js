const express=require('express');

const route=express.Router();

const controller=require("../controller/controllers");



/*   admin side .............................................................. */


const multer=require('multer');


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload=multer({storage:storage}).single('image');

/* admin side...........................................*/

route.get("/main",controller.main);
route.get('/login',controller.index);
route.post("/adminlogin",controller.addlogin);
route.get('/formvalidate',controller.form);
route.get('/profile',controller.prf);
route.get('/table-datatable',controller.table);
route.get("/viewcat",controller.viewcat);
route.get("/catdelte",controller.catdlt);
route.post('/formvalid',upload,controller.frmdata);
route.get('/viewdata',controller.showdata);
route.get('/category',controller.ctadd);
route.post('/addcategory',controller.cateadd);
route.get('/delete',controller.dlt);
route.get("/edit",controller.edit);
route.post("/update",upload,controller.update);
route.get("/viewcon",controller.viewcon);
route.get("/condlt",controller.condlt);


/* user side...........................................*/

route.get("/",controller.userlogin);
route.get("/userregister",controller.userregister);
route.post('/rgaddata',controller.rgadd);
route.post('/lgaddata',controller.lgadd);
route.get("/userindex",controller.userindex);
route.get("/shop",controller.shop);
route.get("/productdetail",controller.productdetail);
route.get("/cart",controller.cart);
route.get("/checkout",controller.checkout);
route.get("/blogdetails",controller.blogdetails);
route.get("/blog",controller.blog);
route.get("/contact",controller.contact);
route.post("/contact",controller.conadd);






module.exports=route;
