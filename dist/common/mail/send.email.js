"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_js_1 = require("../../config/config.js");
const domain_expetion_js_1 = require("../errors/domain.expetion.js");
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: config_js_1.APP_EMAIL,
        pass: config_js_1.APP_PASSWORD,
    },
});
const sendEmail = async ({ to, cc, bcc, subject, text, html, attachments = [], }) => {
    try {
        if (!to?.length && !cc?.length && !bcc?.length) {
            throw new domain_expetion_js_1.BadRequestException("At least one recipient (to, cc, bcc) is required.");
        }
        if (!subject && !text && !html) {
            throw new domain_expetion_js_1.BadRequestException("At least one of subject, text, or html is required.");
        }
        const info = await transporter.sendMail({
            from: `'"${config_js_1.APPLICATION_NAME}""${config_js_1.APP_EMAIL}"`,
            to,
            cc,
            bcc,
            subject,
            text,
            html,
            attachments,
        });
        console.log("Message sent: %s", info.messageId);
        // Preview URL is only available when using an Ethereal test account
        console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(info));
    }
    catch (err) {
        console.error("Error while sending mail:", err);
    }
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=send.email.js.map