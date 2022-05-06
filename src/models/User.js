import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    picture: {
        type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);