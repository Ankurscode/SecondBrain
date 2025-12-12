import { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_Password } from "./config.js";

export const userMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const header=req.headers['authorization'];
    const decode=jwt.verify(header as string,JWT_Password)
    if(decode){
        //@ts-ignore
        req.userId=decode.id;
        next()
    }else{
        res.json({
            msg:"You are not logedIn"
        })
    }
}