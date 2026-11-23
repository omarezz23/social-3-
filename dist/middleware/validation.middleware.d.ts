import { ZodType } from "zod";
import { LangEnum } from "../common/enum/security.enum";
import { NextFunction, Request, Response } from "express";
type validationinuttype = (lang: LangEnum) => ZodType;
export declare const validation: (Schema: validationinuttype) => (req: Request, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=validation.middleware.d.ts.map