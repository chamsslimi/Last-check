const User=require('../models/User')


exports.updateUserImage=async(req,res)=>{
    try {
     await User.findByIdAndUpdate(req.user.id,{$set:{imageUrl:req.file.filename}})
       res.status(200).send("image uploded") 
    } catch (error) {
       res.status(500).send('servor error') 
    }
}

exports.updateUserInfo=async(req,res)=>{
   if(req.body.phone){
      req.body.phone=Number(req.body.phone)
   }
   try {
   const user= await User.findByIdAndUpdate(req.user.id,{$set:req.body},{new:true})

      res.status(200).send({msg:"user updated",user} ) 
   } catch (error) {
      res.status(500).send('servor error') 
   }
}

exports.getAllUsers=async(req,res)=>{
   try {
      let  users=await User.find();
      
      res.status(200).send({msg:'all users',users});
   } catch (error) {
       res.status(500).send('server error'); 
       
   }
   }

exports.deleteUser=async(req,res)=>{
   let {id}=req.params
   try {
       let  user=await User.findByIdAndDelete(id);
       res.status(200).send({msg:'user deleted',user});
   } catch (error) {
       res.status(500).send('server error'); 
      
   }
}  