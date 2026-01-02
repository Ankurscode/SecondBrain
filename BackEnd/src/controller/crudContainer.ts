import { Response } from "express"
import { AuthRequest } from "../middleware/authMiddleware"
import { userModel } from "../models/userModel";
import { contentModel } from "../models/contentModel";
export const newContents=async(req:AuthRequest,res:Response)=>{
    try{
    const {link,constentType,title,tag} = req.body;
    const userid = req.userID;

    //checking whether user given all the field or not
    if (!link || !constentType || !title || !userid) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const contentCreated = new contentModel({
      link:link,
      constentType:constentType,
      title:title,
      tag:tag,
      userId:userid
    })

    await contentCreated.save();
    res.status(200).json({
      message: "Content saved Successfully"
    })
    return;
    }catch(e){
        console.log("Somethi is worng:",e)
        res.status(500).json({
            msg:"Server problem"
        })
    }
}

export const content=async(req:AuthRequest,res:Response)=>{
    try{
        const userID=req.userID
        console.log(userID)
    if(!userID){
        res.status(400).json({
            msg:"UserId is need "
        })
        return
    }
    const Usercontents=await userModel.find({userId:userID}).populate("userId","username")
    console.log(Usercontents)
    res.status(200).json({
        msg:"User contents",
        data:Usercontents
    })
    return
    }catch(e){
        console.log("Error occured in serverSide",e)
        res.status(500).json({
            msg:"Server is not working"
        })
    }
    
}