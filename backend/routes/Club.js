const express=require('express');
const upload =require("../middelwares/upload")
const { getOneDog, addDog, getAllDogs, deleteDog, updateDog, updateClubProfile, searchDog, getUserDogs } = require('../controllers/clubController');
const isAuth = require('../middelwares/isAuth');
const router=express.Router();


//add new dog
router.post('/adddog',isAuth,addDog)
// get all dogs
router.get('/alldogs',getAllDogs)
router.get('/userdog',isAuth,getUserDogs)
//delete dog
router.delete('/deletedog/:id',deleteDog)
//update dog
router.put('/updatedog/:id',updateDog)
//getOne dog
router.get('/getOnedog/:id',getOneDog)
//update picture
router.put('/uploadpicture/:id',isAuth,upload.single('dogImage') ,updateClubProfile)
//search dog
router.get('/searchDog/:racename/:owner',searchDog)

module.exports=router; 