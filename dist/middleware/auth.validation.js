"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetpassword = exports.resendConfirmEmail = exports.confirmEmail = exports.signup = exports.login = exports.loginSchema = void 0;
const zod_1 = require("zod");
const validation_1 = require("../../common/validation");
const loginSchema = (lang) => {
    return zod_1.z.object({
        email: validation_1.generalValidationFields.email(lang),
        password: validation_1.generalValidationFields.password(lang),
    });
};
exports.loginSchema = loginSchema;
const login = (lang) => {
    return zod_1.z.object({});
};
exports.login = login;
const signup = (lang) => {
    return zod_1.z.object({
        body: (0, exports.loginSchema)(lang)
            .safeExtend({
            fullName: validation_1.generalValidationFields.fullName(lang),
            confirmpassword: validation_1.generalValidationFields.confirmpassword(lang),
            phone: validation_1.generalValidationFields.phone(lang),
            gender: validation_1.generalValidationFields.gender(lang),
        })
            .superRefine((data, ctx) => {
            console.log({ data, ctx });
            (0, validation_1.matchfeilds)("password", "confirmpassword", data, ctx, lang);
        }),
    });
};
exports.signup = signup;
const confirmEmail = (lang) => {
    return zod_1.z.object({
        body: zod_1.z.strictObject({
            email: validation_1.generalValidationFields.email(lang),
            otp: validation_1.generalValidationFields.otp(lang),
        }),
    });
};
exports.confirmEmail = confirmEmail;
const resendConfirmEmail = (lang) => {
    return zod_1.z.object({
        body: zod_1.z.strictObject({
            email: validation_1.generalValidationFields.email(lang),
        }),
    });
};
exports.resendConfirmEmail = resendConfirmEmail;
const resetpassword = (lang) => {
    return zod_1.z.object({
        body: zod_1.z
            .strictObject({
            email: validation_1.generalValidationFields.email(lang),
            otp: validation_1.generalValidationFields.otp(lang),
            password: validation_1.generalValidationFields.password(lang),
            confirmpassword: validation_1.generalValidationFields.confirmpassword(lang),
        })
            .superRefine((data, ctx) => {
            console.log({ data, ctx });
            (0, validation_1.matchfeilds)("password", "confirmpassword", data, ctx, lang);
        }),
    });
};
exports.resetpassword = resetpassword;
//# sourceMappingURL=auth.validation.js.map