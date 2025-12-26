import mongoose from "mongoose"

const dbConnect = ()=>{
  mongoose.connect(`${process.env.DBUrl}secondBrain12`).then(()=>{
    console.log("Connected Successfully")
  }).catch((err)=>{
    console.log("Something Wrong",err)
  })
}

export default dbConnect