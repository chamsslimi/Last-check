const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const clubSchema= new Schema({

    
     racename:{
         type:String,required:true
     },
     birthDate:String,
     sex:String,
     owner:String,
     phone:Number,
     adresse:String,
     pictureUrl:String,
     price:Number,
     description:String,
     userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
       },
})
module.exports= mongoose.model('Club',clubSchema)