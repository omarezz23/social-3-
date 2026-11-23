import { z } from "zod";
import { LangEnum } from "../common/enum/security.enum.js";
import { GenderEnum } from "../common/enum/enum.gender.js";
type MatchFieldsParams = {
    original: string;
    copy: string;
    data: Record<string, unknown>;
    ctx: z.RefinementCtx;
    lang: LangEnum;
};
export declare const matchfeilds: ({ original, copy, data, ctx, lang, }: MatchFieldsParams) => void;
export declare const generalValidationFields: {
    email: (_lang: LangEnum) => z.ZodEmail;
    password: (_lang: LangEnum) => z.ZodString;
    fullName: (lang: LangEnum) => z.ZodString;
    confirmpassword: (_lang: LangEnum) => z.ZodString;
    phone: (_lang: LangEnum) => z.ZodOptional<z.ZodE164>;
    gender: (_lang: LangEnum) => z.ZodEnum<typeof GenderEnum>;
    otp: (_lang: LangEnum) => z.ZodString;
    id: (_lang: LangEnum) => z.ZodString;
    file: (_lang: LangEnum) => z.ZodObject<{
        fieldname: z.ZodString;
        originalname: z.ZodString;
        encoding: z.ZodString;
        mimetype: z.ZodString;
        buffer: z.ZodInstanceOf<Buffer<ArrayBufferLike>>;
        size: z.ZodNumber;
        path: z.ZodString;
    }, z.core.$strict>;
};
export {};
//# sourceMappingURL=validation.d.ts.map