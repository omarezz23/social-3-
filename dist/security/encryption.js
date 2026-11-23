"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
const config_js_1 = require("../config/config.js");
// const algorithm = "aes-256-cbc";
const key = config_js_1.ENCRYPTION_KEY;
if (!key) {
    throw new Error("ENCRYPTION_KEY is missing");
}
const iv = crypto_1.default.randomBytes(config_js_1.ENCRYPTION_IV_LENGTH);
const encrypt = async (plaintext) => {
    const cipher = crypto_1.default.createCipheriv("aes-256-cbc", key, iv);
    let encryptData = cipher.update(plaintext, "utf-8", "hex");
    encryptData += cipher.final("hex");
    //console.log({ iv, cipher, encryptData });
    return `${iv.toString("hex")}::${encryptData}`;
};
exports.encrypt = encrypt;
const decrypt = async (cipherText) => {
    const [iv, encryptData] = cipherText.split("::");
    //console.log({ iv, encryptData });
    const iv_vector = Buffer.from(iv, "hex");
    //console.log({ iv_vector });
    const decipherVector = crypto_1.default.createDecipheriv("aes-256-cbc", key, iv_vector);
    let plainText = decipherVector.update(encryptData, "hex", "utf-8");
    plainText += decipherVector.final("utf-8");
    return plainText;
};
exports.decrypt = decrypt;
//# sourceMappingURL=encryption.js.map