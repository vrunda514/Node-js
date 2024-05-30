const bcrypt=require('bcrypt');
const mongoose=require('mongoose');
const schema=require('../model/rgschema');
const cbunkschema=require('../model/cbunkschema');
const feedschema=require('../model/feedschema');
const userschma=require('../model/userschma');

const path=require('path');
const { log } = require('console');
const { response } = require('express');
const uschema = require('../model/userschma');


const index=(req,res)=>{
    res.render('login');
}
const rgstr=(req,res)=>{
   res.render('register');
}
const rgadd = async(req,res)=>{
    const data={
        name:req.body.name, 
        email:req.body.email,
        password:req.body.password
    }
   const euser=await schema.findOne({
        name:data.name
   })
    if(euser)
    {
        res.send("user alredy exist");
    }
    else{
        const saltRounds=10;
        const hasedpassword=await bcrypt.hash(data.password , saltRounds);
        data.password=hasedpassword;
        schema.insertMany(data);
        res.redirect('back');
    }
    console.log(data);
}
const lgadd=async(req,res)=>{
    try {
        const lg=await schema.findOne({
            email:req.body.email
        })
        if(!lg)
        {
            res.render("name not taken..");
        }
        const pw=await bcrypt.compare(req.body.password,lg.password)
        if(pw)
        {
            res.render("index")
        }
        else{
            res.send("password not match..")
        }
    } catch (error) {
        res.send("wrong details..")
    }
}


const crtbunk=(req,res)=>{
    res.render('createbunk');
}

const upbk=(req,res)=>{
    cbunkschema.find({}).then((data)=>{
        res.render('updatebunk',{
            record:data
        })
    })
}

const cbunkadd=(req,res)=>{
    const {bunk,area,address,city,pincode,number,battery}=req.body;
    cbunkschema.create({
        bunk:bunk,
        area:area,
        address:address,
        city:city,
        pincode:pincode,
        number:number,
        battery:battery,

    }).then((data)=>{
        console.log("data stored..");
        return res.redirect('back');
    }).catch((err)=>{
        console.log(err);
    })
}

const cdelbnk=(req,res)=>{
    let id=req.query.id;

    cbunkschema.findByIdAndDelete(id).then((data)=>{
        return res.redirect('back');
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}

const cedtbnk=(req,res)=>{
     let id=req.query.id;

     cbunkschema.findById(id).then((val)=>{
        return res.render('editdata',{
            val
        })
     })
}

const cupdtbk=(req,res)=>{
    let id=req.body.id;
    cbunkschema.findByIdAndUpdate(id,{
        bunk:req.body.bunk,
        area:req.body.area,
        city:req.body.city,
        address:req.body.address,
        pincode:req.res.pincode,
        number:req.body.number,
        battery:req.body.battery
    }).then((val)=>{
        console.log("data updated..");
        return res.redirect('updatebunk');
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}
const feedb=(req,res)=>{
    res.render('feedback');
}

const fbadd=(req,res)=>{
    const {fname,feed}=req.body;
    feedschema.create({
        fname:fname,
        feed:feed
    }).then((data)=>{
        console.log(" feedback data stored..");
        return res.redirect('back');
    }).catch((err)=>{
        console.log(err);
    })
}

const feedshow=(req,res)=>{
    feedschema.find({}).then((data)=>{
        res.render('showfeed',{
            record:data
        })
    })
}

const feeddel=(req,res)=>{

    let id=req.query.id;

    feedschema.findByIdAndDelete(id).then((data)=>{
        console.log("data delete")
        return res.redirect('back');
    }).catch((err)=>{
        console.log(err);
        return false;
    })
    // console.log(data);
}

const bookshow=(req,res)=>{
    cbunkschema.find({}).then((data)=>{
        res.render('bookingdata',{
            record:data
        })
    })
}

const mainpg=(req,res)=>{
    res.render('mainpage');
}

// user side data................

const usindex=(req,res)=>{
    res.render('uslogin');
}
const usrgstr=(req,res)=>{
   res.render('usregister');
}
const usrgadd = async(req,res)=>{
    const data={
        name:req.body.name, 
        email:req.body.email,
        password:req.body.password
    }
   const euser=await uschema.findOne({
        name:data.name
   })
    if(euser)
    {
        res.send("user alredy exist");
    }
    else{
        const saltRounds=10;
        const hasedpassword=await bcrypt.hash(data.password , saltRounds);
        data.password=hasedpassword;
        uschema.insertMany(data);
        res.redirect('back');
    }
    console.log(data);
}
const uslgadd=async(req,res)=>{
    try {
        const lg=await uschema.findOne({
            email:req.body.email
        })
        if(!lg)
        {
            res.render("name not taken..");
        }
        const pw=await bcrypt.compare(req.body.password,lg.password)
        if(pw)
        {
            res.render("userindex")
        }
        else{
            res.send("password not match..")
        }
    } catch (error) {
        res.send("wrong details..")
    }
}

const usrindex=(req,res)=>{
    res.render('userindex');
}

const myprf=(req,res)=>{
    uschema.find({}).then((data)=>{
        res.render('profile',{
            record:data
        })
    })
}

const prfdel=(req,res)=>{

    let id=req.query.id;

    uschema.findByIdAndDelete(id).then((data)=>{
        console.log("data delete")
        return res.redirect('back');
    }).catch((err)=>{
        console.log(err);
        return false;
    })
    // console.log(data);
}

const usrbk=(req,res)=>{
    cbunkschema.find({}).then((data)=>{
        res.render('userbooking',{
            record:data
        })
    })
}


   
module.exports={
    index,
    rgstr,
    rgadd,
    lgadd,
    feedb,
    crtbunk,
    upbk,
    cbunkadd,
    cdelbnk,
    cedtbnk,cupdtbk,
    fbadd,
    feeddel,
    feedshow,
    bookshow,
    mainpg,

    //user.....

    usindex,
    usrgstr,
    usrgadd,
    uslgadd,
    usrindex,
    myprf,
    prfdel,
    usrbk

}