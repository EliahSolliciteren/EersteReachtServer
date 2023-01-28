const mongoose = require('mongoose')
const passportLocalMongoose = require("passport-local-mongoose")
Schema = mongoose.Schema;
//Alles wat met modellen te maken heeftin het enkelvoud houden.


applicatieGebruikerSchema = mongoose.Schema({

    naam: {voornaam:{
            type:String,
            trim: true

        },

        familienaam: {
            type: String,
            trim: true

        }
    },

    gebruikersnaam:{
        type: String,
        trim: true
    },

   /* lenen:[{

        type:mongoose.Schema.Types.ObjectId,
        ref: 'boek'

    }],*/

    //geleendOp: [Date],

    email:{

        type: String,
        required: true,
        trim: true
    },








},

    {

        timestamps: true




    })













applicatieGebruikerSchema.plugin(passportLocalMongoose, {
    usernameField: "email",

})








module.exports= mongoose.model("applicatieGebruiker",applicatieGebruikerSchema)