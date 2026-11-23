import { z } from "zod";
import mongoose from "mongoose";
import { LangEnum } from "../common/enum/security.enum.js";
import { GenderEnum } from "../common/enum/enum.gender.js";


type ValidationMessage = {
  ar: string;
  en: string;
};

const nameValidationMessage = {
  102: {
    ar: "الاسم يجب أن يكون بين 3 و 30 حرفًا",
    en: "Name must be between 3 and 30 characters",
  },
};

const getvalidationMessage = (
  lang: LangEnum,
  code: keyof typeof nameValidationMessage,
): string => {
  return lang === LangEnum.AR
    ? nameValidationMessage[code].ar
    : nameValidationMessage[code].en;
};

////////////////////////////////////////////////////////////////

type MatchFieldsParams = {
  original: string;
  copy: string;
  data: Record<string, unknown>;
  ctx: z.RefinementCtx;
  lang: LangEnum;
};

export const matchfeilds = ({
  original,
  copy,
  data,
  ctx,
  lang,
}: MatchFieldsParams): void => {
  if (data[original] !== data[copy]) {
    ctx.addIssue({
      code: "custom",
      path: [copy],
      message:
        lang === LangEnum.AR
          ? "فشل التطابق بين الحقول"
          : "Fields do not match",
    });
  }
};

////////////////////////////////////////////////////////////////

export const generalValidationFields = {
  email: (_lang: LangEnum) => z.email(),

  password: (_lang: LangEnum) =>
    z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Password must contain one uppercase letter and one special character",
        },
      )
      .min(8)
      .max(16),

  fullName: (lang: LangEnum) =>
    z
      .string()
      .min(3, {
        message: getvalidationMessage(lang, 102),
      })
      .max(30, {
        message: getvalidationMessage(lang, 102),
      }),

  confirmpassword: (_lang: LangEnum) =>
    z.string().min(8).max(16),

  phone: (_lang: LangEnum) => z.e164().optional(),

  gender: (_lang: LangEnum) => z.enum(GenderEnum),

  otp: (_lang: LangEnum) =>
    z.string().length(6, {
      message: "OTP must be 6 characters",
    }),

  id: (_lang: LangEnum) =>
    z.string().refine(
      (data: string) => mongoose.Types.ObjectId.isValid(data),
      {
        message: "Invalid format",
      },
    ),

  file: (_lang: LangEnum) =>
    z.strictObject({
      fieldname: z.string(),
      originalname: z.string(),
      encoding: z.string(),
      mimetype: z.string(),
      buffer: z.instanceof(Buffer),
      size: z.number(),
      path: z.string(),
    }),
};