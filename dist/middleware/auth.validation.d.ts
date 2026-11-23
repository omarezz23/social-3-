import { z } from "zod";
export declare const loginSchema: (lang: any) => z.ZodObject<{
    email: any;
    password: any;
}, z.core.$strip>;
export declare const login: (lang: any) => z.ZodObject<{}, z.core.$strip>;
export declare const signup: (lang: any) => z.ZodObject<{
    body: z.ZodObject<{
        email: any;
        password: any;
        fullName: any;
        confirmpassword: any;
        phone: any;
        gender: any;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const confirmEmail: (lang: any) => z.ZodObject<{
    body: z.ZodObject<{
        email: any;
        otp: any;
    }, z.core.$strict>;
}, z.core.$strip>;
export declare const resendConfirmEmail: (lang: any) => z.ZodObject<{
    body: z.ZodObject<{
        email: any;
    }, z.core.$strict>;
}, z.core.$strip>;
export declare const resetpassword: (lang: any) => z.ZodObject<{
    body: z.ZodObject<{
        email: any;
        otp: any;
        password: any;
        confirmpassword: any;
    }, z.core.$strict>;
}, z.core.$strip>;
//# sourceMappingURL=auth.validation.d.ts.map