import { Request, Response, NextFunction } from "express";
interface iError extends Error {
    status: number;
}
export declare const globalErrorHandling: (error: iError, req: Request, res: Response, next: NextFunction) => Response;
export {};
//# sourceMappingURL=error.middleware.d.ts.map