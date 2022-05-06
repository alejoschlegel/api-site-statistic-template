import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));