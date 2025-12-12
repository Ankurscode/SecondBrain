import mongoose ,{Schema,model} from "mongoose"


mongoose.connect('mongodb+srv://Ankurs:l80u0wZzl8JQSH7W@cluster0.pgife.mongodb.net/secondBrain12')
.then(()=>console.log("db connected"));

const userSchema=new Schema({
    username:{type:String,unique:true},
    password:{type:String,require:true}
})

export const userModel=mongoose.model("User",userSchema)  

const contentSchema=new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:"Tag"}],
    userId:{type:mongoose.Types.ObjectId,ref:"User",require:true}
})

export const contentModel=mongoose.model("Content",contentSchema)