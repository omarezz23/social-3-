import { EventEmitter } from "node:events";
import { EmailEnum } from "../enum/email.enum.js";
export declare const emailEvent: EventEmitter<any>;
export declare const UserEmailKey: ({ email, subject }: {
    email: string;
    subject: EmailEnum;
}) => string;
export declare const UserEmailTrialsKey: ({ email, subject }: {
    email: string;
    subject: EmailEnum;
}) => string;
//# sourceMappingURL=email.event.d.ts.map