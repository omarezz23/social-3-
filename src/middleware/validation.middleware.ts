import { number, ZodType } from "zod";
import { LangEnum } from "../common/enum/security.enum";
import { BadRequestException } from "../common/errors/domain.expetion";
import { NextFunction, Request, Response } from "express";
import { Ivalidation } from "../common/interfaces/valid.js";

type validationinuttype = (lang:LangEnum) =>ZodType
export const validation = (Schema:validationinuttype) => {
  return (req:Request, res:Response, next:NextFunction) => {

    const lang = Number(req.headers ['accept-language'] )
    //console.log({lang})
    const validationResult = Schema(lang).safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
      // files: req.files,
      // file: req.file,
     // headers: req.headers,
    });
    //console.log({ validationResult });
    if (!validationResult.success) {
      throw new BadRequestException ("validation error", validationResult.error.issues);
    }
    req.validate = validationResult.data;
    next();
  };
};
