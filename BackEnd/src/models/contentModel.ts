import mongoose ,{Model, Types} from "mongoose";


const contentSchema=new mongoose.Schema({
    link:{type:String,requried:true},
    constentType:{type:String,required:true},
    title:{type:String,requried:true},
    tag:[{type:mongoose.Types.ObjectId,ref:"Tag"}],
    userId:[{type:mongoose.Types.ObjectId,ref:"User",required:true}]
})

export const contentModel= mongoose.model("Content",contentSchema)