"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.app = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const config_js_1 = require("../config/config.js");
Object.defineProperty(exports, "PORT", { enumerable: true, get: function () { return config_js_1.PORT; } });
const redis_connection_js_1 = __importDefault(require("./models/redis.connection.js"));
//dotenv.config();
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
const connectDB = async (app, PORT) => {
    try {
        if (!config_js_1.DB_URI) {
            throw new Error("DB_URI is missing in .env");
        }
        if (!config_js_1.DB_NAME) {
            throw new Error("DB_NAME is missing in .env");
        }
        await redis_connection_js_1.default.connectRedis();
        await mongoose_1.default.connect(config_js_1.DB_URI, { dbName: config_js_1.DB_NAME });
        //UserModel.syncIndexes();
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("MongoDB connection failed:");
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=db.js.map