import express from "express"
import { userValidation } from "./validation.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { contentModel, userModel } from "./db.js";
import { JWT_Password } from "./config.js";
import { userMiddleware } from "./middleware.js";
const app=express();


const port=3000;




app.use(express.json());


app.post('/api/v1/signUp',async(req,res)=>{
    const validation=userValidation.parse(req.body);
    if(!validation.username||!validation.password){
        return res.status(441).json({
            msg:"Missing Input"
        })
    }
   try{
    const salt=await bcrypt.genSalt();
    const hashedPassword=await bcrypt.hash(validation.password,salt);

   await userModel.create({
        username:validation.username,
        password:hashedPassword
   })


      res.status(200).json({message:"User Created"})

   }catch(e){
    res.status(500).json({
        msg:"Something in worng",
        msgs:"Username have been used again"
        
    })
    console.log(e)
   } 
})

app.post('/api/v1/signIn',async(req,res)=>{
    const validation=userValidation.parse(req.body);
    if(!validation.username||!validation.password){
        return res.status(411).json({
            msg:"Invalid input"
        })
    }
    const users=await userModel.findOne({username:validation.username})
    if(users){
        const token=jwt.sign({id:users._id},JWT_Password)
        res.json({
            token
        })
    }else{
        res.status(403).json({
            msg:"Invalid Inputs"
        })
    }

})

app.post('/api/v1/content',userMiddleware,async(req,res)=>{
    const type=req.body.type;
    const link=req.body.link;
    await contentModel.create({
        link,
        type,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })
    return res.json({
        meg:"Content added"
    })

})

app.get('/api/v1/content',async(req,res)=>{

})

app.delete('/api/v1/content',async(req,res)=>{

})

app.post('/api/v1/brain/share',(req,res)=>{

})

app.get('/api/v1/brain/:shareLink',(req,res)=>{

})

app.listen(port);