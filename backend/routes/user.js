const express=require ('express');
const { updateUserImage, updateUserInfo, getAllUsers, deleteUser } = require('../Controllers/userController');
const isAuth = require('../middelwares/isAuth');
const upload = require('../middelwares/upload');
const User = require('../models/User');

const router=express.Router() ;

//update image profile
router.put('/uploadimage',isAuth,upload.single('myImage') ,updateUserImage)

router.put('/updateprofile',isAuth,updateUserInfo)

router.get('/allusers',isAuth,getAllUsers)

router.delete('/deleteuser/:id',isAuth,deleteUser)

module.exports=router;