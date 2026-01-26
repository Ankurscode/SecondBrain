import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  }
});

export const contentModel = mongoose.model("Content", contentSchema);
