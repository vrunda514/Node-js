const blogtbl = require("../model/blogschema");
const conttbl = require("../model/conschema");
const passport = require('passport');
const localauth=require("../middleware/localauth");

const fs=require('fs');
const logintbl = require("../model/schema");

const home=(req,res)=>{
    res.render('home');
}

const login=(req,res)=>{
    res.render('login');
}

const register=(req,res)=>{
    res.render('register');
}

const about=(req,res)=>{
    res.render('about');
}

const blog=(req,res)=>{
    blogtbl.find({}).then((data)=>{
        res.render('blog',
        {
            record:data
        });
    })

}

const contact=(req,res)=>{
    res.render('contact');
}

const addcon=(req,res)=>{
    conttbl.create({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message,
        number:req.body.number
    }).then(()=>{
        console.log("data inserted..");
        res.redirect("back");
    }).catch((err)=>{
        console.log("data not insrted..");
    })
}

const blogadd=(req,res)=>{
    blogtbl.create({
        name:req.body.name,
        title:req.body.title,
        detail:req.body.detail,
        author:req.body.author,
        like:req.body.like,
        comment:req.body.comment,
        image:req.file.path
    }).then((data)=>{
        console.log("blog inserted..");
        res.redirect('back');
    }).catch((err)=>{
        console.log("blog not inserted..");
    })
}

const blogdelete=(req,res)=>{
    let id=req.query.id;

    blogtbl.findByIdAndDelete(id).then((data)=>{
        fs.unlinkSync(data.image);
        console.log("image deleted...");
    }).catch((err)=>{
        console.log("image not deleted...");
        return false;
    })

    blogtbl.findByIdAndDelete(id).then((data)=>{
        console.log("blog deleted...");
        return res.redirect('back');
    }).catch((err)=>{
        console.log("blog not deleted...");
        return false;
    })
}

const loginadd=(req,res)=>{
    res.render('home');
}

const registeradd=async(req,res)=>{
    // logintbl.create({
    //     username:req.body.username,
    //     email:req.body.email,
    //     password:req.body.password
    // })

    let user={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }
     
    let us=await logintbl.findOne({username:user.username});
    if(us)
    {
        res.send("user already exits..");
        // console.log('already taken');
        // res.redirect("back");
    }

    let em=await logintbl.findOne({email:user.email});
    if(em)
    {
        res.send("email already exits..");
        // res.redirect("back");
    }

    let pw=await logintbl.findOne({password:user.password});
    if(pw)
    {
        res.send("password already exits..");
        // res.redirect("back");
    }
    else{
        await logintbl.create(user)
        return res.render('/');
    }


    console.log(req.body);
    res.redirect("/")
}

 module.exports={
    home,
    login,
    register,
    about,
    blog,
    contact,
    addcon,
    blogadd,
    blogdelete,
    loginadd,
    registeradd
 }