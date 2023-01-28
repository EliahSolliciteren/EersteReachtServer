const memo=require('../models/memo.js')
const gebruiker=require('../models/applicatieGebruiker.js')
const mongoose =require('mongoose')
module.exports = {

createPost: (req,res,next) => {

  console.log(req.body.memos)

    let id
gebruiker.findOne({email:req.body.username}).exec().then((gevonden)=>{
    const id=gevonden.id;
    const memos=req.body.memos;
   let finaleDatum;
    memos.forEach(mem=>{
       console.log('binnenkomst:'+mem.datum)
        if(mem.datum&&mem.datum.match('Z')) {
            console.log('match T')
       finaleDatum=mem.datum;
        }else if(mem.datum){
        let gesplitte= mem.datum.split('-')
        try{if(gesplitte[1].length===1){gesplitte[1]='0'+gesplitte[1]}

        let datumSamenstellen=gesplitte[2]+'-'+  gesplitte[1]+'-'+gesplitte[0]+'T';
        let uur=((mem.uur.length>0)?(mem.uur+':00'):('00:00:00')) + 'Z';
console.log(uur)
       finaleDatum=datumSamenstellen+uur;}
       catch(e){console.log(mem.datum)}
       // console.log(new Date(finaleDatum))
     //   console.log(finaleDatum)
    }
        console.log('finaal '+finaleDatum)
      const query={id:mem.id}
        //const update = { $set: { name: "Deli Llama", address: "3 Nassau St" }};
        const options= { upsert: true };
        memo.replaceOne(query,{titel:mem.titel,mainTekst:mem.mainTekst,themas:mem.themas,id:mem.id,applicatieGebruiker:id,datum:finaleDatum},options).exec()})})}}



        //memo.create({titel:mem.titel,mainTekst:mem.mainTekst,themas:mem.themas,id:mem.id,applicatieGebruiker:id})})})}
//geen nieuwe creëren maar updaten
    //id's opslaan bij de gebruiker





