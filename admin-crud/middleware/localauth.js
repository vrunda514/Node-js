const passport = require('passport');
const logintbl = require('../model/schema');
const session = require('express-session');

const localstrategy=require('passport-local').Strategy;

const localauth=(passport)=>{

    passport.use(new localstrategy(async(username,password,done)=>{

        let user=await logintbl.findOne({username:username})

        if(!user)
        {
            return done (null,false);
        }
        if(user.password!=password)
        {
            return done(null,false);
        }
        return done(null,user);
    }))
}
passport.serializeUser((user,done)=>{
    return done(null,user.id);
})
passport.deserializeUser(async(id,done)=>{
    let user=await logintbl.findById(id);
    return done(null,user)
})


module.exports=localauth;