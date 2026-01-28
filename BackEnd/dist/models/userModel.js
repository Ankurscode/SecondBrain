import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userEmail: { type: String, require: true, unique: true }
});
export const userModel = mongoose.model("User", userSchema);
