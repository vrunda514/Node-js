const ftbl = require('../model/formschema');
const admin=require('../model/schema');
const fs=require('fs')
const login=(req,res)=>{
    res.render('login');
}
const register=(req,res)=>{
    res.render('register');
}

const index=(req,res)=>{
    res.render('index');
}

const rgstradd=async(req,res)=>{
    // admin.create({
    //     username:req.body.username,
    //     email:req.body.email,
    //     password:req.body.password
    // }).then(()=>{
    //     console.log("register successfully");
    //     res.redirect('back')
    // }).catch((err)=>{
    //     console.log("register unsuccessfully");
    //     return false;
    // })
    let data={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }

    let user=await admin.findOne({username:data.username});
    if(user)
    {
        res.send("username alredy exits..")
    }
    let eml=await admin.findOne({email:data.email});
    if(eml)
    {
        res.send("email alredy exits..")
    }
    let pwd=await admin.findOne({password:data.password});
    if(pwd)
    {
        res.send("password alredy exits..")
    }
    else
    {
        await admin.create(data);
        return res.redirect('back')
    }
}
const lgnadd=(req,res)=>{
    res.render('index');
}
const form=(req,res)=>{
    res.render('form');
}
const table=async(req,res)=>{
    await ftbl.find({}).then((data)=>{
        res.render('table',{
            record:data
        });
    })
}

const adddata=async(req,res)=>{
    await ftbl.create({
        name:req.body.name,
        gender:req.body.gender,
        date:req.body.date,
        city:req.body.city,
        img:req.file.path
    }).then(()=>{
        console.log("data inserted..");
        res.redirect('back');
    }).catch((err)=>{
        console.log("data not inserted..");
        return false;
    })
}
const deletdata=async(req,res)=>{

    let id=req.query.id;
    await ftbl.findById(id).then((data)=>{
        fs.unlinkSync(data.img)
    })

    await ftbl.findByIdAndDelete(id).then((data)=>{
        console.log("data deleted..");
        res.redirect("back");
    }).catch(()=>{
        console.log("data not deleted..");
        return false;
    })
}

const editdata=async(req,res)=>{
    let id=req.query.id;

    await ftbl.findById(id).then((data)=>{
        res.render('edit',{
            data
        });
    })
}

const updatedata=async(req,res)=>{

     let id=req.body.id;

     if(req.file)
     {
        var data={
            name:req.body.name,
            gender:req.body.gender,
            date:req.body.date,
            city:req.body.city,
            img:req.file.path
        }
     }
     else
     {
        var data={
            name:req.body.name,
            gender:req.body.gender,
            date:req.body.date,
            city:req.body.city,
        }
     }
     await ftbl.findByIdAndUpdate(id,data).then((data)=>{
        console.log("data updated..");
        return res.redirect('back');
     }).catch((err)=>{
        console.log("data not updated..");
        return false;
     })
}

module.exports={
    login,
    register,
    index,
    rgstradd,
    lgnadd,
    form,
    table ,
    adddata,
    deletdata,
    editdata,
    updatedata
}