import { Request,Response } from "express"
import admin from "../config/firebase-admin";


export const googleAuth=async(req:Request,res:Response)=>{
    try{
        const token=req.headers.authorization;
        
        if(!token){
            return res.status(401).json({meg:"Token missing"})
        }
        const decode=await admin.auth().verifyIdToken(token)

        return res.json({
            msg:"Login successfully",
            user:{
                uid:decode.uid,
                email:decode.email,
                name:decode.name
            },

        })
    }catch(e){
        return res.status(500).json({msg:"Invalid token"})
        console.log("Something is worng",e)
    }
}