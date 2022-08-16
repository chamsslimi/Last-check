const Club=require('../models/club');

exports.addDog=async(req,res)=>{
     let {racename,birthDate,sex,owner,phone,adresse,pictureUrl,price,description}=req.body;
      phone=Number(phone);
      price=Number(price);
    
    try {
     
       let club = new Club({racename,birthDate,sex,owner,phone,adresse,pictureUrl,price,description,userId:req.user.id}) ;
   
       await club.save() ;
       console.log(club);
       res.status(201).send({msg:'dog added',club});
    } catch (error) {
        res.status(500).send('server error');
    }
}
exports.getUserDogs=async(req,res)=>{
    try {
       let  dogs=await Club.find({userId:req.user.id});
       res.status(200).send({msg:"user's dogs",dogs});
    } catch (error) {
        res.status(500).send('server error'); 
        
    }
    }

exports.getAllDogs=async(req,res)=>{
    try {
       let  dogs=await Club.find();
       res.status(200).send({msg:'all dogs',dogs});
    } catch (error) {
        res.status(500).send('server error'); 
        
    }
    }
exports.deleteDog=async(req,res)=>{
    let {id}=req.params
    try {
        let  dog=await Club.findByIdAndDelete(id);
        res.status(200).send({msg:'dog deleted',dog});
    } catch (error) {
        res.status(500).send('server error'); 
       
    }
}
exports.updateDog=async(req,res)=>{
    let {id}=req.params
    try {
      const updateDog= await Club.findByIdAndUpdate(id,
        {$set:{...req.body}} ,{new:true}) 
      res.status(200).send({msg:'dog Updated',updateDog});
    } catch (error) {
        res.status(500).send('server error');
    }  
}
exports.getOneDog=async(req,res)=>{
    let {id}=req.params
    try {
      
       const  dog=await Club.findById(id);
       res.status(200).send({msg:'dog',dog});
    } catch (error) {
        res.status(500).send('server error'); 
        
    }
    } 

    exports.updateClubProfile=async(req,res)=>{
        try {
         await Club.findByIdAndUpdate(req.params.id,{$set:{pictureUrl:req.file.filename}})
           res.status(200).send("picture upladed") 
        } catch (error) {
           res.status(500).send('servor error') 
        }
    }  

    exports.searchDog=async(req,res)=>{
        console.log(req.body)
        let {owner,racename}=req.params;  
        try {
           const dogs= await Club.find({$or:[{owner:owner},{racename:racename}]})
            res.status(200).send({msg:'dogFound',dogs})
        } catch (error) {
            res.status(500).send('servor error') 
        }
    }

    