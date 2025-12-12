import { NextFunction,Request,Response } from "express";
import jwt, { JwtPayload }  from "jsonwebtoken";
import { JWT_Password } from "./config.js";

export function userMiddleware(req:Request,res:Response,next:NextFunction){
    const header =req.headers['authorization'];
    const decode=jwt.verify(header as string,JWT_Password);
    if(decode){
        
        req.userId=(decode as JwtPayload).id;
        next()
    }else{
        res.status(411).json({
            msg:"You are not logedIn"
        })
    }

}