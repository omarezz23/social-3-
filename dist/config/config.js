"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TWITTER = exports.INSTEGRAM = exports.FACEBOOK = exports.APPLICATION_NAME = exports.APP_EMAIL = exports.APP_PASSWORD = exports.REDIS_URL = exports.WEB_CLIENT_ID = exports.ACCESS_USER_TOKEN_SIGN = exports.ACCESS_ADMIN_TOKEN_SIGN = exports.REFRESH_USER_TOKEN_SIGN = exports.REFRESH_ADMIN_TOKEN_SIGN = exports.REFRESH_TOKEN_EXP = exports.ACCESS_TOKEN_EXP = exports.REFRESH_TOKEN_SIGN = exports.ACCESS_TOKEN_SIGN = exports.ENCRYPTION_IV_LENGTH = exports.ENCRYPTION_KEY = exports.DB_NAMEEE = exports.DB_NAME = exports.DB_URI = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = Number(process.env.PORT) || 3000;
;
exports.DB_URI = process.env.DB_URI;
exports.DB_NAME = process.env.DB_NAME;
exports.DB_NAMEEE = process.env.DB_NAMEEE;
exports.ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
exports.ENCRYPTION_IV_LENGTH = parseInt(process.env.ENCRYPTION_IV_LENGTH ?? "16");
//export const ENCRYPTION_IV_LENGTH = process.env.ENCRYPTION_IV_LENGTH
exports.ACCESS_TOKEN_SIGN = process.env.ACCESS_TOKEN_SIGN;
exports.REFRESH_TOKEN_SIGN = process.env.REFRESH_TOKEN_SIGN;
// export const ACCESS_TOKEN_EXP =process.env.ACCESS_TOKEN_EXP
// export const REFRESH_TOKEN_EXP =process.env.REFRESH_TOKEN_EXP
exports.ACCESS_TOKEN_EXP = Number(process.env.ACCESS_TOKEN_EXP) / 1000;
exports.REFRESH_TOKEN_EXP = Number(process.env.REFRESH_TOKEN_EXP) / 1000;
exports.REFRESH_ADMIN_TOKEN_SIGN = process.env.REFRESH_ADMIN_TOKEN_SIGN;
exports.REFRESH_USER_TOKEN_SIGN = process.env.REFRESH_USER_TOKEN_SIGN;
exports.ACCESS_ADMIN_TOKEN_SIGN = process.env.ACCESS_ADMIN_TOKEN_SIGN;
exports.ACCESS_USER_TOKEN_SIGN = process.env.ACCESS_USER_TOKEN_SIGN;
exports.WEB_CLIENT_ID = process.env.WEB_CLIENT_ID;
exports.REDIS_URL = process.env.REDIS_URL;
exports.APP_PASSWORD = process.env.APP_PASSWORD;
exports.APP_EMAIL = process.env.APP_EMAIL;
exports.APPLICATION_NAME = process.env.APPLICATION_NAME;
exports.FACEBOOK = process.env.FACEBOOK;
exports.INSTEGRAM = process.env.INSTEGRAM;
exports.TWITTER = process.env.TWITTER;
//# sourceMappingURL=config.js.map