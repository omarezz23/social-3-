"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalValidationFields = exports.matchfeilds = void 0;
const zod_1 = require("zod");
const mongoose_1 = __importDefault(require("mongoose"));
const security_enum_js_1 = require("../common/enum/security.enum.js");
const enum_gender_js_1 = require("../common/enum/enum.gender.js");
const nameValidationMessage = {
    102: {
        ar: "الاسم يجب أن يكون بين 3 و 30 حرفًا",
        en: "Name must be between 3 and 30 characters",
    },
};
const getvalidationMessage = (lang, code) => {
    return lang === security_enum_js_1.LangEnum.AR
        ? nameValidationMessage[code].ar
        : nameValidationMessage[code].en;
};
const matchfeilds = ({ original, copy, data, ctx, lang, }) => {
    if (data[original] !== data[copy]) {
        ctx.addIssue({
            code: "custom",
            path: [copy],
            message: lang === security_enum_js_1.LangEnum.AR
                ? "فشل التطابق بين الحقول"
                : "Fields do not match",
        });
    }
};
exports.matchfeilds = matchfeilds;
////////////////////////////////////////////////////////////////
exports.generalValidationFields = {
    email: (_lang) => zod_1.z.email(),
    password: (_lang) => zod_1.z
        .string()
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: "Password must contain one uppercase letter and one special character",
    })
        .min(8)
        .max(16),
    fullName: (lang) => zod_1.z
        .string()
        .min(3, {
        message: getvalidationMessage(lang, 102),
    })
        .max(30, {
        message: getvalidationMessage(lang, 102),
    }),
    confirmpassword: (_lang) => zod_1.z.string().min(8).max(16),
    phone: (_lang) => zod_1.z.e164().optional(),
    gender: (_lang) => zod_1.z.enum(enum_gender_js_1.GenderEnum),
    otp: (_lang) => zod_1.z.string().length(6, {
        message: "OTP must be 6 characters",
    }),
    id: (_lang) => zod_1.z.string().refine((data) => mongoose_1.default.Types.ObjectId.isValid(data), {
        message: "Invalid format",
    }),
    file: (_lang) => zod_1.z.strictObject({
        fieldname: zod_1.z.string(),
        originalname: zod_1.z.string(),
        encoding: zod_1.z.string(),
        mimetype: zod_1.z.string(),
        buffer: zod_1.z.instanceof(Buffer),
        size: zod_1.z.number(),
        path: zod_1.z.string(),
    }),
};
//# sourceMappingURL=validation.js.map