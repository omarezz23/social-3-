"use strict";
// import { Response } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resFormatter = void 0;
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
const resFormatter = (handler) => {
    return async (req, res, next) => {
        const { message = true, status = 200, data = undefined, meta = undefined } = await handler(req, res, next);
        return res.status(status || 200).json({
            message: message,
            data: data,
            meta: meta
        });
    };
};
exports.resFormatter = resFormatter;
//# sourceMappingURL=response.middleware.js.map