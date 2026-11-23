// import { Response } from "express";

import {Request, NextFunction,Response } from "express";
import { IResponse } from "../common/interfaces/res.js";

// interface INewSuccessResponse {
//   res: Response;
//   statusCode?: number;
//   message?: string;
//   data?: unknown;
// }

// export const newsuccessResponse = ({
//   res,
//   statusCode = 200,
//   message = "done",
//   data = null,
// }: INewSuccessResponse) => {
//   return res.status(statusCode).json({
//     success: true,
//     message,
//     data,
//   });
// };


export const resFormatter = (handler: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {message = true , status=200 , data= undefined,meta=undefined}:IResponse = await handler(req, res, next);
    return res.status(status || 200).json({
      message: message ,
      data: data ,
      meta:meta
    });
  } }