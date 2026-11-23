import { EventEmitter } from "node:events";
import { sendEmail } from "./send.email";
import { verifyEmailTemplate } from "./email.temlate";
import { EmailEnum } from "../enum/email.enum.js";

export const emailEvent = new EventEmitter();
export const UserEmailKey = ({email , subject}:{email:string,subject:EmailEnum})=>{
  return `user::${email}::${subject}::otp`
}
export const UserEmailTrialsKey = ({email , subject}:{email:string,subject:EmailEnum})=>{
  return `${UserEmailKey({email , subject})}::trials`
}
emailEvent.on("sendEmail", async ({ recepiant, subject, data }) => {
  try {
    await sendEmail({
      ...recepiant,
      subject,
      html: verifyEmailTemplate({code : data.code , subject , title : data.title ?? subject})
    });
  } catch (error) {
    console.log(error);
  }
});
