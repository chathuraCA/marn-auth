import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
export const singup =async(req,res,next)=>{
    const{username,email,password}=req.body;
    const hashpassword=bcryptjs.hashSync(password,10);
    
    const newUser =new User({username,email,password:hashpassword});
  try{
    await newUser.save();
    res.status(201).json({message:"User created sucsessfull"});
  }catch(error){
    next(errorHandler(500,'bla bla'));
  }
  
   
}