import { Attachment } from "nodemailer";
export declare const sendEmail: ({ to, cc, bcc, subject, text, html, attachments, }: {
    to?: string | string[];
    cc?: string | string[];
    bcc?: string | string[];
    subject?: string;
    text?: string;
    html?: string;
    attachments?: Attachment[];
}) => Promise<void>;
//# sourceMappingURL=send.email.d.ts.map