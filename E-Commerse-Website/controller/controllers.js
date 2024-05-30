/*   admin side .............................................................. */

const bcrypt=require('bcrypt');
const mongoose=require('mongoose');
const schema=require('../model/rgschema');
const frmschma = require('../model/formschema');
const acschma=require('../model/adcatschema');
const path=require('path');
const fs=require('fs');
const contbl = require('../model/contactschema');

const index=(req,res)=>{
    res.render('admin/login');
}

const addlogin=async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
        if( email == "vrunda@gmail.com" && password == "123")
        {
            res.render("admin/index");
        }
        else
        {
            res.send("wrong details..")
        }
}

const main=(req,res)=>{
    res.render("admin/index");
}



const prf=(req,res)=>{
    res.render('admin/profile');
}

const ctadd=(req,res)=>{
    res.render('admin/category');
}


const form=(req,res)=>{
    acschma.find({}).then((data)=>{
        res.render('admin/form-validation',
        {
            record:data
        })
    })
    
}
const table=(req,res)=>{
    res.render('admin/tabledata')
}

const viewcat=async(req,res)=>{
    await acschma.find({}).then((data)=>{
        res.render('admin/viewcat',
            {
                record:data
            }
        )
    })    
}

const frmdata=((req,res)=>{
   
    acschma.findOne({Product:req.body.product_id}).then((data)=>{
        console.log(data);
       
        let image=" ";
        if(req.file)
        {
            image=req.file.path;
        }
        const {product_id,product,brand,size,price,description}=req.body;
        
       return frmschma.create({
            product_id:product_id,           
            product:product,
            brand:brand,
            size:size,
            image:image,
            price:price,
            description:description,
        }).then(()=>{
            console.log("data stored..");
            return res.redirect('back');
        }).catch((err)=>{
            console.log("data not stored..");
        })
    })


        
})


const showdata=async(req, res)=>{
    await frmschma.find({}).populate('product_id').then((data)=>{
        res.render('admin/tabledata',
        {
          record:data  
        })
    })
}

const cateadd=((req,res)=>{
    const data=req.body;
    acschma.create(data).then(()=>{
        console.log("data store")
        res.redirect('back');
    })

    console.log(data);
})


const edit=async(req,res)=>{
    let id=req.query.id;

    await frmschma.findById(id).populate('product_id').then((data)=>{
        res.render("admin/edit",{
            data
        })
    })
}


const dlt=((req,res)=>{

    let id=req.query.id;

     frmschma.findById(id).then((data)=>{
        fs.unlinkSync(data.image);
      })

    frmschma.findByIdAndDelete(id).then(()=>{
        console.log("droped the data");
        res.redirect('back');
    })
})

const update=async(req,res)=>{

    let id=req.body.id;

    frmschma.findById(id).then((data)=>{
        fs.unlinkSync(data.image);
        console.log("update img dlt..");
      })

    if(req.file)
    {
        var data={
            product:req.body.product,
            brand:req.body.brand,
            size:req.body.size,
            image:req.file.path,
            price:req.body.price,
            description:req.body.description,
        }
    }
    else
    {
        var data={
            
            product:req.body.product,
            brand:req.body.brand,
            size:req.body.size,
            price:req.body.price,
            description:req.body.description
        }
        
    }
    
    await frmschma.findByIdAndUpdate(id,data).then(()=>{
        console.log("data updated..");
        return res.redirect("back");
    }).catch((err)=>{
        console.log(err);
        console.log("data not updated..");
        return false;
    })    
}


const catdlt=(async(req,res)=>{

    let id=req.query.id;

    await acschma.findByIdAndDelete(id).then(()=>{
        console.log("droped the  category data");
        res.redirect('back');
    })
})

const viewcon=async(req,res)=>{
    await contbl.find({}).then((data)=>{
        res.render('admin/contactview',
            {
                record:data
            }
        )
    })    
}

const condlt=(async(req,res)=>{

    let id=req.query.id;

    await contbl.findByIdAndDelete(id).then(()=>{
        console.log("droped the contact data");
        res.redirect('back');
    })
})


/*   user  side .............................................................. */


const userlogin=(req,res)=>{
    res.render("login");
}


const userregister=(req,res)=>{
    res.render("register");
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
            name:req.body.name
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


const userindex=(req,res)=>{
    res.render("index");
}

const shop=async(req,res)=>{

     await frmschma.find({}).populate('product_id').then((data)=>{
        res.render("shop",
            {
             record:data   
            }
        );

    })
}

const productdetail=(req,res)=>{
    res.render("product-details");
}


const cart=(req,res)=>{
    res.render("cart");
}

const checkout=(req,res)=>{
    res.render("checkout");
}

const blogdetails=(req,res)=>{
    res.render("blog-details");
}

const blog=(req,res)=>{
    res.render("blog");
}

const contact=(req,res)=>{
    res.render("contact");
}

const conadd=async(req,res)=>{
    await contbl.create({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        message:req.body.message,
    }).then(()=>{
        console.log("contact added..");
        res.redirect("back");
    })
}

module.exports={


/*   admin side .............................................................. */

    main,
    index,
    addlogin,
    form,
    table,
    viewcat,
    frmdata,
    showdata,
    ctadd,
    cateadd,
    prf,
    dlt,
    edit,
    update,
    catdlt,
    viewcon,
    condlt,
    
/*   user side .............................................................. */

    userlogin,
    userregister,
    rgadd,
    lgadd,
    userindex,
   shop,
    productdetail,
    cart,
    checkout,
    blogdetails,
    blog,
    contact,
    conadd
}
