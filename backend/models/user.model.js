import { mongoose } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: "" },
    profilepic: { type: String, default: "" },
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    gender: { type: String, enum: ['male', 'female', 'trans'] },
    bookmarks: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    posts: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  },
  { timestamps: true }
);
export const User = mongoose.model("User",userSchema);