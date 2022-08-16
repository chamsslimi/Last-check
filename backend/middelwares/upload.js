const multer=require('multer')
const path=require('path')

const storage=multer.diskStorage({
    destination:'./client/public/uploads',
    filename:function(re,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    }
})
const upload=multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        const fileType=/jpeg|png|jpg/gi;
        const mimeType=fileType.test(file.mimetype);
        if (mimeType){
            cb(null,true)
        }else{cb(null,false)}
    }
    
});
module.exports= upload;