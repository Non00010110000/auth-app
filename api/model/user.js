import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    requierd: true,
    unique: true,
  },
  password: {
    type: String,
    requierd: true,
  },

  email: {
    type: String,
    requierd: true,
  },
},{timestamps : true});


const User = mongoose.model("User" , userSchema);

export default User;