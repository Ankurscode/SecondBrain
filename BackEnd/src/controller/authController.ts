import { Request,Response } from "express"
import { userValidation } from "../validation"
import { userModel } from "../models/userModel";
import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken";
export const singUp=async(req:Request,res:Response)=>{
    try{
        const parse= userValidation.safeParse(req.body);

        if(!parse.success){
            res.status(400).json({
                msg:"Invalid inputs",
                errors:parse.error.format()
            })
            return
        }

        const {username,userEmail,password}=parse.data
        
        const existingUser=await userModel.findOne({userEmail})

        if(existingUser){
            res.status(409).json({
                msg:"Mail already exists"
            })
            return;
        }
        const hashedPassword=await bcrypt.hash(password,6)
        const user=await userModel.create({
            username:username,
            password:hashedPassword,
            userEmail:userEmail
        })
        res.status(200).json({
            msg:"User created successfully"
        })
    }catch(err:unknown){
        if(err instanceof Error){
            console.log("Something went worng while resiving the data",err.message)
        }else{
            console.log("Something went worng while resiving the data",err)
        }
        res.status(500).json({
            msg:"Something went worng while rechiving the data"
        })
    }
}

const singIn=async(req:Request,res:Response)=>{
    try{
        const parsed=userValidation.safeParse(req.body);
        if(!parsed.success){
            return res.status(400).json({
                msg:"Invalid input"
            })
        }
        const {userEmail,password}=parsed.data





    }catch(err){

    }
}
