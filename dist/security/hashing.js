"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.hash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const hash = async (plainText, Rounds = 12, minor = "b") => {
    const salt = await bcrypt_1.default.genSalt(Rounds, minor);
    return await bcrypt_1.default.hash(plainText, salt);
};
exports.hash = hash;
const compare = async (plainText, hashed) => {
    return await bcrypt_1.default.compare(plainText, hashed);
};
exports.compare = compare;
//# sourceMappingURL=hashing.js.map