
const express=require('express');

const multer=require('multer');

const route=express.Router();

const controller=require('../controller/icontroller');


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    	},
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    	}
	})
const upload=multer({storage:storage}).single('img')


route.get("/",controller.index);
route.get("/form",controller.form);
route.get("/table",controller.table);
route.post("/insert",upload,controller.adddata);
route.get("/showdata",controller.showdata);
route.get('/deletedata',controller.deletedata);
route.get('/editdata',controller.editdata);
route.post('/updateData',upload,controller.updatedata)



module.exports=route;