const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema= new Schema({
     name:{
         type:String,
         required:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     password:{
        type:String,
        required:true
     },
     imageUrl:String,
     
     country:String,
     birthday:String,
     ocuppation:String,
     phone:Number,
     
     role:{
      type:String,
     enum:['admin','user'],
     default:'user',
     }
})
module.exports= mongoose.model('User',userSchema)