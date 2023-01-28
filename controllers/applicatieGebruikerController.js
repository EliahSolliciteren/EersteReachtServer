const bezoeker = require('../models/applicatieGebruiker.js')
const mongoose =require('mongoose')
const passport = require("passport")
const memo=require('../models/memo')
const passportLocalMongoose=require('passport-local-mongoose')
const expressValidator=require('express-session')
const { checkSchema , validationResult} = require('express-validator')
const { findByIdAndUpdate, findById } = require('../models/applicatieGebruiker.js')
const {Mongoose, Types} = require("mongoose");

module.exports = {

    createPost: (req,res,next) => {
console.log(req.body)



      const  applicatiegebruiker = (body)=>{
            return{

                naam:{voornaam : body.voornaam,
                    familienaam : body.familienaam},
                email : body.email,

            }}
console.log(applicatiegebruiker)
        let nieuweBezoeker= new bezoeker(applicatiegebruiker(req.body))
       // console.log(nieuweBezoeker)
        bezoeker.register(nieuweBezoeker, req.body.password, function(e,gevonden){
            if (e){
                console.log(e)}

            if(gevonden){console.log(gevonden);next()






}})},

aanmelden:(req,res,next)=>{passport.authenticate('local')(req,res,next)},

    afmelden: (req,res,next)=>{

        req.logout(function(err) {
            if (err) { console.log(err)}})
console.log(req.user)
        next();
    },
next:(req,res,next)=>{console.log(Types.ObjectId(req.user.id))
if(req.user){
const id=Types.ObjectId(req.user.id)
memo.find({applicatiegebruiker:id}).then((memos)=>{console.log(memos)
const memosAndGebruiker={}
    memosAndGebruiker["gebruiker"]=req.user;
    memosAndGebruiker["memos"]=memos;
    console.log(memosAndGebruiker)
    res.send(/*req.user*/memosAndGebruiker)}
)




}
},

findOne:(req,res,next)=>{

 res.send('ontvangen')




}

}




