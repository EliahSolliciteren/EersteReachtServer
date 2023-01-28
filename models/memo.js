const mongoose = require('mongoose')

Schema = mongoose.Schema;
//Alles wat met modellen te maken heeftin het enkelvoud houden.


notitieSchemaSchema = mongoose.Schema({

    titel: {
        type: String,
        trim: true

    },

    mainTekst: {
        type: String,
        trim: true


    },

    applicatieGebruiker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'applicatieGebruiker',
        required: true
    },
    datum: {
        type: Date,
    },

    themas: [{

        type: String

    }],
    id:{

        type:Number,
        required:true
    }
},
//Optioneel nog een type
//ID is noodzaak

{

    timestamps: true


}
)

module.exports= mongoose.model("memo",notitieSchemaSchema)