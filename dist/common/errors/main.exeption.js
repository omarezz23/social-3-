"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainException = void 0;
class MainException extends Error {
    status;
    constructor(message, status = 400, cause) {
        super(message, { cause });
        this.status = status;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.MainException = MainException;
//# sourceMappingURL=main.exeption.js.map