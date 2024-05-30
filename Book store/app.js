const express=require("express");
const port=4000;
const app=express();
const path=require("path")

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,"public")))

app.set("view engine","ejs")


const database=require('./config/connect');

const admin=require('./model/admin')

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
    return false;
})
app.get("/form",(req,res)=>{
    res.render('form');
    return false;
})
app.get("/table",(req,res)=>{
    res.render('table');
    return false;
})
app.post("/insert",(req,res)=>{
    const{name,author,price,page}=req.body;
    admin.create({
        name:name,
        author:author,
        page:page,
        price:price,
    }).then((data)=>{
        console.log("data stored..");
        res.redirect('back');
    }).catch((err)=>{
        console.log("data not stored..");
    })
})

app.get("/showdata",(req,res)=>{
    admin.find({}).then((data)=>{
        res.render('table',{
            record:data
        })
    })
})

app.get('/deletedata',(req,res)=>{
    
    let id = req.query.id;

    admin.findByIdAndDelete(id).then((data)=>{
        return res.redirect('back');
    }).catch((err)=>{
        console.log("err");
        return false;
    })
})

app.get('/editdata',(req,res)=>{
    let id=req.query.id;
    admin.findById(id).then((data)=>{
        return res.render('edit',{
           data
        })
    })
})

app.post('/updateData',(req,res)=>{
    let id=req.body.id;
    admin.findByIdAndUpdate(id,{
        name:req.body.name,
        author:req.body.author,
        page:req.body.page,
        price:req.body.price
    }).then((data)=>{
        console.log("data upadate");
        return res.redirect('back');
        // return res.redirect('/showdata');
    }).catch((err)=>{
        console.log(err);
        return false;
    })
})


app.listen(port,(err)=>{
    if(err)
    {
        console.log("server not started...");
    }
    console.log("server started at :- "+ port);
})