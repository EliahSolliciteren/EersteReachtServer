const express = require('express')
const app=express()
require('dotenv').config({path:'./process.env'})
app.listen(process.env.PORT||3001 , function () { console.log('express running at port 3001')})
const cors = require('cors')
app.use(cors())
router=require('./routes/indexRouter.js')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

expressValidator = require("express-validator")
const methodOverride = require("method-override")
app.use(methodOverride("_method", {methods: ["POST", "GET"]}));


app.use(express.static('public'))

const expressSession = require("express-session"),
    cookieParser = require("cookie-parser")

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(expressSession({
    secret:  process.env.SESSION_SECRET,
    rolling: true,
    cookie: {maxAge: 400000000,
        secure:false

    },
    resave: false,
    saveUninitialized: false
}));


console.log(process.env.CONNECTION_STRING)




const MongoDB=require("mongodb").MongoClient,

    dbURL = process.env.CONNECTION_STRING,
    dbName = 'Rect'
MongoDB.connect(dbURL, (error, client)=> {
    autoIndex:true;
    useCreateIndex:true
    if (error) throw error;
   client.db(dbName);

})






const mongoose = require("mongoose");


mongoose.connect(process.env.CONNECTION_STRING,
    {useNewUrlParser: true,})
let db = mongoose.connection;
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose")
})
const passport = require("passport")
app.use(passport.initialize())
app.use(passport.session())
const applicatieGebruiker = require("./models/applicatieGebruiker")
passport.use(applicatieGebruiker.createStrategy())
passport.serializeUser(applicatieGebruiker.serializeUser())
passport.deserializeUser(applicatieGebruiker.deserializeUser())
const passportLocalMongoose = require('passport-local-mongoose');

app.use((req, res, next) => {


    res.locals.logIn = req.isAuthenticated();
    res.locals.user = req.user;


    next();
})


var jwt = require('jsonwebtoken');


app.use("/",router)