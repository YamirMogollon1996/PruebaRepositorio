import multer from "multer"
import { Request, Response, NextFunction } from "express"
import path, { extname } from "path"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public")
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
})
const uploadMulter = multer({
    storage: storage,
    fileFilter :  (req, file , cb) =>{
            const iamgenesPermitidad = ["JPG","JPED"] 
            const Exname =  extname(file.mimetype) 
            if (  file.mimetype(extname) ){
                
            }   else{
                cb( new Error("Solo se permiten imiages") , false)
            }         
    }
})