const admin=require('../model/schema');
const movietbl=require('../model/mvaddschema');

const index=(req,res)=>{
    res.render('index');
}

const admnpg=(req,res)=>{
    res.render('admin');
}


const login=async(req,res)=>{

    let user=req.body.username
    let pwd=req.body.password
        if(user==="admin" && pwd==="admin"){
            res.render("details")
        }
    else{
        res.send("Invalid Details...");
    }
}

const user=(req,res)=>{
    movietbl.find({}).then((item)=>{
        res.render('user',{
            data:item
        });
    })
}

const addmdata=(req,res)=>{
    movietbl.create({
        mname:req.body.mname,
        date:req.body.date,
        director:req.body.director,
        actor:req.body.actor,
        language:req.body.language,
        gerne:req.body.gerne,
        des:req.body.des,
        image:req.file.path
    }).then(()=>{
        console.log("data inserted ...")
        return res.redirect('back');
    }).catch((err)=>{
        console.log(err)
    })
    console.log(req.body);
    console.log(req.file);
}

module.exports={
    index,
    user,
    admnpg,
    login,
    addmdata
}