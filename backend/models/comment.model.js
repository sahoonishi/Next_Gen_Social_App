import { mongoose } from "mongoose";
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  post: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Post" },
  author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});
export const Comment = mongoose.model("Comment", commentSchema);
