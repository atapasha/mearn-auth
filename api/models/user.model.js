import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      requierd: true,
      unique: true,
    },

    email: {
      type: String,
      requierd: true,
      unique: true,
    },

    password: {},
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
