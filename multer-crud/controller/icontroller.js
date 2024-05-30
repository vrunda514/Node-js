const admin=require("../model/admin");

const index=(req,res)=>{
    res.render("index");
    return false;
}
const form=(req,res)=>{
    res.render('form');
    return false;
}
const table=(req,res)=>{
    res.render('table');
    return false;
}

const adddata=(req,res)=>{
    let img="";
	if(req.file){
		img=req.file.path;
	}
    const{sid,year,name,bod,gender,address,email,number,school}=req.body;
    admin.create({
        sid:sid,
        year:year,
        name:name,
        bod:bod,
        gender:gender,
        address:address,
        email:email,
        number:number,
        school:school,
        img:img
    }).then((data)=>{
        console.log("data stored..");
        res.redirect('back');
    }).catch((err)=>{
        console.log("data not stored..");
    })
}

const showdata=(req,res)=>{
    admin.find({}).then((data)=>{
        res.render('table',{
            record:data
        })
    })
}
const deletedata=(req,res)=>{
    let id = req.query.id;
    admin.findById(id).then((data)=>{
        fs.unlinkSync(data.img);
    })
    
    admin.findByIdAndDelete(id).then((data)=>{
        
        return res.redirect('back');
    }).catch((err)=>{
        console.log("data not deleted");
        return false;
    })
}
const editdata=(req,res)=>{
    let id=req.query.id;
    admin.findById(id).then((data)=>{
        return res.render('edit',{
           data
        })
    })
}
const updatedata=(req,res)=>{
    let id=req.body.id;

    if(req.file)
    {
        var data={
            sid:req.body.sid,
            year:req.body.year,
            name:req.body.name,
            bod:req.body.bod,
            gender:req.body.gender,
            address:req.body.address,
            email:req.body.email,
            number:req.body.number,
            school:req.body.school,
            img:req.file.path
        }
    }
    else
    {
        var data={
            sid:req.body.sid,
            year:req.body.year,
            name:req.body.name,
            bod:req.body.bod,
            gender:req.body.gender,
            address:req.body.address,
            email:req.body.email,
            number:req.body.number,
            school:req.body.school
        }
    }
    admin.findByIdAndUpdate(id,data).then((data)=>{
        console.log("data upadate");
        return res.redirect('back');
        // return res.redirect('/showdata');
    }).catch((err)=>{
        console.log("data not updated");
        return false;
    })
}

module.exports={
    index,
    form,
    table,
    adddata,
    showdata,
    deletedata,
    editdata,
    updatedata
}