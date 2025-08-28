import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI)
        console.log("Connected to the DB SUCCESSFULLY ✅");

    } catch (error) {
        console.log("Error connecting to the MONGODB:", error);
        process.exit(1);
    }
}