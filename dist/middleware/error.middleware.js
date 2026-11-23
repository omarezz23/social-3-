"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandling = void 0;
const globalErrorHandling = (error, req, res, next) => {
    return res.status(error.status ?? 500).json({
        message: error.message,
        issue: error.cause,
        error,
        stack: error.stack,
    });
};
exports.globalErrorHandling = globalErrorHandling;
//# sourceMappingURL=error.middleware.js.map