import { z } from "zod";
import { GenderEnum } from "../../common/enum/enum.gender.js";
import { LangEnum } from "../../common/enum/security.enum.js";
export declare const loginSchema: (lang: LangEnum) => z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export declare const login: (lang: LangEnum) => z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodEmail;
        password: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const signup: (lang: LangEnum) => z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodEmail;
        password: z.ZodString;
        fullName: z.ZodString;
        confirmpassword: z.ZodString;
        phone: z.ZodOptional<z.ZodE164>;
        gender: z.ZodEnum<typeof GenderEnum>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const confirmEmail: (lang: LangEnum) => z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodEmail;
        otp: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>;
export declare const resendConfirmEmail: (lang: LangEnum) => z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodEmail;
    }, z.core.$strict>;
}, z.core.$strip>;
export declare const resetpassword: (lang: LangEnum) => z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodEmail;
        otp: z.ZodString;
        password: z.ZodString;
        confirmpassword: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strip>;
//# sourceMappingURL=auth.validation.d.ts.map