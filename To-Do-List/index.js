const express=require('express');

const port=1000;

const app=express();
app.use(express.urlencoded());

app.set("view engine","ejs");

let book=[
    {
        no:1,
        name:"XYZ",
        filed:"BBA",
        year:"First year",
        city:"Rajkot"
    }
];

app.get('/',(req,res)=>{
    return res.render('main')
})

app.get('/view',(req,res)=>{
    res.render('view',{
        detail:book
    });
})

app.post('/insertData',(req,res)=>{
    let no=req.body.no;
    let name=req.body.name;
    let filed=req.body.filed;
    let year=req.body.year;
    let city=req.body.city;


    let obj={
        no:no,
        name:name,  
        filed:filed,
        year:year,
        city:city
    }

    book.push(obj);

    return res.redirect('back');
    // console.log(no);
})

app.get('/deleteData',(req,res)=>{
    let no=req.query.no;

    let ans=book.filter((item)=>
    {
        return item.no !=no;
    })
        book = ans;
       return res.redirect('back');
    console.log(no);
})


app.get('/editData',(req,res)=>{
    // console.log(req.query);
    let no=req.query.no;

    let ans=book.filter((item)=>{
        return  item.no == no;
    })
    return res.render('edit',{
        editdata:ans[0]
    })
})

app.post('/updatedata',(req,res)=>
{
    let no=req.body.no;

    let info=book.filter((item)=>{
        if( item.no == no)
        {
            // item.SrNo=req.body.SrNo;
            item.name=req.body.name;
            item.filed=req.body.filed;
            item.year=req.body.year;
            item.city=req.body.city;

            return item;
        }
    })
    return res.redirect('/');
    // console.log(fil);
});








app.listen(port,(err)=>{
    if(err)
    {
        console.log("server not start");
    }
    console.log("server start : " + port);
})