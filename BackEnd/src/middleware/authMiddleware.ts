import { Request,Response,NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { Types } from "mongoose"


export interface AuthRequest extends Request{
    userID?:string|JwtPayload
}

export const isAuthenticated=(req:AuthRequest,res:Response,next:NextFunction)=>{
    try{
        const token= req.headers.token==="string"? req.headers.token:undefined
        if(!token){
            res.status(400).json({
                msg:"Bad Token request"
            })
            return
        }
        if(!process.env.SECRET_KEY){
            res.status(500).json({
                msg:"server internal problem"
            })
            return
        }
        const decode=jwt.verify(token,process.env.SECRET_KEY)as unknown as{userID:Types.ObjectId};
        req.userID=decode.userID;
        next()
    }catch(e){
        res.status(400).json({
            msg:`Invalid or expaled token${e}`
        })
        return
    }

}