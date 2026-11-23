import mongoose from "mongoose";
import express, { Application } from "express";
import cors from "cors";
import { DB_NAME, DB_URI, PORT } from "../config/config.js";

import helmet from "helmet";
import  CacheService  from "./models/redis.connection.js";


//dotenv.config();
const app = express();
app.use( express.json());

export const connectDB = async (app: Application, PORT: number) => {
  try {
    if (!DB_URI) {
      throw new Error("DB_URI is missing in .env");
    }
    if (!DB_NAME) {
      throw new Error("DB_NAME is missing in .env");
    }
    await CacheService.connectRedis();
    await mongoose.connect(DB_URI, { dbName: DB_NAME });
    //UserModel.syncIndexes();
    console.log("Connected to MongoDB");
  
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:");
  }
};
export { app, PORT };
