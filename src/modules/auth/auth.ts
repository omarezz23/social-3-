import { Router } from "express";
import type { Request, Response, NextFunction } from "express";
import AuthenticationService from "./auth.service";
import { resFormatter } from "../../middleware/response.middleware.js";
import { validation } from "../../middleware/validation.middleware.js";
import * as validator from "./auth.validation.js";
import { Ivalidation } from "../../common/interfaces/valid.js";
import { IResponse } from "../../common/interfaces/res.js";
import { LangEnum } from "../../common/enum/security.enum.js";


const authrouter = Router({ strict: true, caseSensitive: true });

// authrouter.post(
//   "/signup",
//   validation(validator.signup),
//   resFormatter((req: Request, res: Response, next: NextFunction):IResponse => {
//     const data = AuthenticationService.signup(req.validate);
//     return {status:201,message:true , data }
//   }),
// );

authrouter.post("/signup",validation(validator.signup),
  resFormatter(async (req: Request, res: Response, next: NextFunction): Promise<IResponse> => {
    const data = await AuthenticationService.signup(req.validate);
    return {status: 201,message: true,data};}));
export default authrouter;

