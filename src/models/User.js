import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    name: {
        type: Object,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);