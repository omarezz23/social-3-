import { Request, Response, NextFunction } from "express";
import { MainException } from "../common/errors/main.exeption.js";

interface iError extends Error {
  status: number;
}

export const globalErrorHandling = (
  error:iError ,
  req: Request,
  res: Response,
  next: NextFunction,
): Response => {
  return res.status(error.status ?? 500).json({
    message: error.message,
    issue: (error as any).cause,
    error,
    stack: error.stack,
  });
};
