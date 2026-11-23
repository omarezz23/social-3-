"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmailTrialsKey = exports.UserEmailKey = exports.emailEvent = void 0;
const node_events_1 = require("node:events");
const send_email_1 = require("./send.email");
const email_temlate_1 = require("./email.temlate");
exports.emailEvent = new node_events_1.EventEmitter();
const UserEmailKey = ({ email, subject }) => {
    return `user::${email}::${subject}::otp`;
};
exports.UserEmailKey = UserEmailKey;
const UserEmailTrialsKey = ({ email, subject }) => {
    return `${(0, exports.UserEmailKey)({ email, subject })}::trials`;
};
exports.UserEmailTrialsKey = UserEmailTrialsKey;
exports.emailEvent.on("sendEmail", async ({ recepiant, subject, data }) => {
    try {
        await (0, send_email_1.sendEmail)({
            ...recepiant,
            subject,
            html: (0, email_temlate_1.verifyEmailTemplate)({ code: data.code, subject, title: data.title ?? subject })
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=email.event.js.map