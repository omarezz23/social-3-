import crypto, { Cipheriv } from "crypto";
import { ENCRYPTION_IV_LENGTH, ENCRYPTION_KEY } from "../config/config.js";



// const algorithm = "aes-256-cbc";
const key = ENCRYPTION_KEY;
if (!key) {
  throw new Error("ENCRYPTION_KEY is missing");
}
const iv = crypto.randomBytes(ENCRYPTION_IV_LENGTH);

export const encrypt = async (plaintext:string) :Promise<string>=> {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encryptData = cipher.update(plaintext, "utf-8", "hex");
  encryptData += cipher.final("hex");
  //console.log({ iv, cipher, encryptData });
  return `${iv.toString("hex")}::${encryptData}`;
};

export const decrypt = async (cipherText:string):Promise<string> => {
  const [iv, encryptData]  = cipherText.split("::") as string[]
  //console.log({ iv, encryptData });
  const iv_vector = Buffer.from(iv as string, "hex");
  //console.log({ iv_vector });
  const decipherVector = crypto.createDecipheriv("aes-256-cbc", key, iv_vector);
  let plainText = decipherVector.update(encryptData as string, "hex", "utf-8");
  plainText += decipherVector.final("utf-8");
  return plainText;
};


