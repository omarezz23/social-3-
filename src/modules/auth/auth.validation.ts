import { z } from "zod";

import { GenderEnum } from "../../common/enum/enum.gender.js";

import { LangEnum } from "../../common/enum/security.enum.js";
import { generalValidationFields, matchfeilds } from "../../utils/validation.js";

export const loginSchema = (lang: LangEnum) => {
  return z.object({
    email: generalValidationFields.email(lang),
    password: generalValidationFields.password(lang),
  });
};

export const login = (lang: LangEnum) => {
  return z.object({
    body: loginSchema(lang),
  });
};

export const signup = (lang: LangEnum) => {
  return z.object({
    body: loginSchema(lang)
      .safeExtend({
        fullName: generalValidationFields.fullName(lang),
        confirmpassword: generalValidationFields.confirmpassword(lang),
        phone: generalValidationFields.phone(lang),
        gender: generalValidationFields.gender(lang),
      })
      .superRefine((data, ctx) => {
        matchfeilds({
          original: "password",
          copy: "confirmpassword",
          data,
          ctx,
          lang,
        });
      }),
  });
};

export const confirmEmail = (lang: LangEnum) => {
  return z.object({
    body: z.strictObject({
      email: generalValidationFields.email(lang),
      otp: generalValidationFields.otp(lang),
    }),
  });
};

export const resendConfirmEmail = (lang: LangEnum) => {
  return z.object({
    body: z.strictObject({
      email: generalValidationFields.email(lang),
    }),
  });
};

export const resetpassword = (lang: LangEnum) => {
  return z.object({
    body: z
      .strictObject({
        email: generalValidationFields.email(lang),
        otp: generalValidationFields.otp(lang),
        password: generalValidationFields.password(lang),
        confirmpassword: generalValidationFields.confirmpassword(lang),
      })
      .superRefine((data, ctx) => {
        matchfeilds({
          original: "password",
          copy: "confirmpassword",
          data,
          ctx,
          lang,
        });
      }),
  });
};