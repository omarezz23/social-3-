import { EmailEnum } from "../enum/email.enum.js";
export declare const tamplates: {
    ConfirmEmail: (data: {
        title: string;
        code: number;
    }) => string;
    ForgetPassword: (data: {
        title: string;
        code: number;
    }) => string;
};
export declare const verifyEmailTemplate: (data: {
    subject: EmailEnum;
    title: string;
    code: number;
}) => string;
//# sourceMappingURL=email.temlate.d.ts.map