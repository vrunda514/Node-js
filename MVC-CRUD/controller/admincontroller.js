const { response, query, request } = require('express');
const admins=require('../models/table')

const index=(req,res)=>{
    admins.find({}).then((data)=>
    {
        res.render('admin',{
            record:data
        });
    }).catch((err)=>{
        console.log(err);
        return false;
    })
    
}

const adddata=(req,res)=>{
    admins.create({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        address:req.body.address,
        message:req.body.message,
    }).then((data)=>{
        console.log("data store..");
        return res.redirect('back');
    }).catch((err)=>{
        console.log("data not store..");
    })
}
const remove=(req,res)=>{
    let id=req.query.id;

    admins.findByIdAndDelete(id).then((data)=>{
        return res.redirect('back');
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}
const edit=(req,res)=>{
    let id=req.query.id;
    admins.findById(id).then((response)=>{
        return res.render('edit',{
            response
        });
    })
}
const update=(req,res)=>{
    let id=req.body.id;
    admins.findByIdAndUpdate(id,{
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        address:req.body.address,
        message:req.body.message,
    }).then((response)=>{
        console.log('data update')
        return res.redirect('/')
    })
}
module.exports={
    index,
    adddata,
    remove,
    edit,
    update
};