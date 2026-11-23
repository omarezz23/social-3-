"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkAuthenticationRequiredException = exports.LoopDetectedException = exports.InsufficientStorageException = exports.HttpVersionNotSupportedException = exports.GatewayTimeoutException = exports.ServiceUnavailableException = exports.BadGatewayException = exports.NotImplementedException = exports.InternalServerErrorException = exports.UnavailableForLegalReasonsException = exports.RequestHeaderFieldsTooLargeException = exports.TooManyRequestsException = exports.PreconditionRequiredException = exports.UpgradeRequiredException = exports.TooEarlyException = exports.FailedDependencyException = exports.LockedException = exports.UnprocessableEntityException = exports.ImATeapotException = exports.UnsupportedMediaTypeException = exports.PayloadTooLargeException = exports.PreconditionFailedException = exports.LengthRequiredException = exports.GoneException = exports.ConflictException = exports.RequestTimeoutException = exports.NotAcceptableException = exports.MethodNotAllowedException = exports.NotFoundException = exports.ForbiddenException = exports.PaymentRequiredException = exports.UnauthorizedException = exports.BadRequestException = void 0;
const main_exeption_js_1 = require("./main.exeption.js");
// 400 - Bad Request
class BadRequestException extends main_exeption_js_1.MainException {
    constructor(message = "Bad Request", cause) {
        super(message, 400, cause);
    }
}
exports.BadRequestException = BadRequestException;
// 401 - Unauthorized
class UnauthorizedException extends main_exeption_js_1.MainException {
    constructor(message = "Unauthorized", cause) {
        super(message, 401, cause);
    }
}
exports.UnauthorizedException = UnauthorizedException;
// 402 - Payment Required
class PaymentRequiredException extends main_exeption_js_1.MainException {
    constructor(message = "Payment Required", cause) {
        super(message, 402, cause);
    }
}
exports.PaymentRequiredException = PaymentRequiredException;
// 403 - Forbidden
class ForbiddenException extends main_exeption_js_1.MainException {
    constructor(message = "Forbidden", cause) {
        super(message, 403, cause);
    }
}
exports.ForbiddenException = ForbiddenException;
// 404 - Not Found
class NotFoundException extends main_exeption_js_1.MainException {
    constructor(message = "Not Found", cause) {
        super(message, 404, cause);
    }
}
exports.NotFoundException = NotFoundException;
// 405 - Method Not Allowed
class MethodNotAllowedException extends main_exeption_js_1.MainException {
    constructor(message = "Method Not Allowed", cause) {
        super(message, 405, cause);
    }
}
exports.MethodNotAllowedException = MethodNotAllowedException;
// 406 - Not Acceptable
class NotAcceptableException extends main_exeption_js_1.MainException {
    constructor(message = "Not Acceptable", cause) {
        super(message, 406, cause);
    }
}
exports.NotAcceptableException = NotAcceptableException;
// 408 - Request Timeout
class RequestTimeoutException extends main_exeption_js_1.MainException {
    constructor(message = "Request Timeout", cause) {
        super(message, 408, cause);
    }
}
exports.RequestTimeoutException = RequestTimeoutException;
// 409 - Conflict
class ConflictException extends main_exeption_js_1.MainException {
    constructor(message = "Conflict", cause) {
        super(message, 409, cause);
    }
}
exports.ConflictException = ConflictException;
// 410 - Gone
class GoneException extends main_exeption_js_1.MainException {
    constructor(message = "Gone", cause) {
        super(message, 410, cause);
    }
}
exports.GoneException = GoneException;
// 411 - Length Required
class LengthRequiredException extends main_exeption_js_1.MainException {
    constructor(message = "Length Required", cause) {
        super(message, 411, cause);
    }
}
exports.LengthRequiredException = LengthRequiredException;
// 412 - Precondition Failed
class PreconditionFailedException extends main_exeption_js_1.MainException {
    constructor(message = "Precondition Failed", cause) {
        super(message, 412, cause);
    }
}
exports.PreconditionFailedException = PreconditionFailedException;
// 413 - Content Too Large
class PayloadTooLargeException extends main_exeption_js_1.MainException {
    constructor(message = "Content Too Large", cause) {
        super(message, 413, cause);
    }
}
exports.PayloadTooLargeException = PayloadTooLargeException;
// 415 - Unsupported Media Type
class UnsupportedMediaTypeException extends main_exeption_js_1.MainException {
    constructor(message = "Unsupported Media Type", cause) {
        super(message, 415, cause);
    }
}
exports.UnsupportedMediaTypeException = UnsupportedMediaTypeException;
// 418 - I'm a Teapot
class ImATeapotException extends main_exeption_js_1.MainException {
    constructor(message = "I'm a Teapot", cause) {
        super(message, 418, cause);
    }
}
exports.ImATeapotException = ImATeapotException;
// 422 - Unprocessable Content
class UnprocessableEntityException extends main_exeption_js_1.MainException {
    constructor(message = "Unprocessable Content", cause) {
        super(message, 422, cause);
    }
}
exports.UnprocessableEntityException = UnprocessableEntityException;
// 423 - Locked
class LockedException extends main_exeption_js_1.MainException {
    constructor(message = "Locked", cause) {
        super(message, 423, cause);
    }
}
exports.LockedException = LockedException;
// 424 - Failed Dependency
class FailedDependencyException extends main_exeption_js_1.MainException {
    constructor(message = "Failed Dependency", cause) {
        super(message, 424, cause);
    }
}
exports.FailedDependencyException = FailedDependencyException;
// 425 - Too Early
class TooEarlyException extends main_exeption_js_1.MainException {
    constructor(message = "Too Early", cause) {
        super(message, 425, cause);
    }
}
exports.TooEarlyException = TooEarlyException;
// 426 - Upgrade Required
class UpgradeRequiredException extends main_exeption_js_1.MainException {
    constructor(message = "Upgrade Required", cause) {
        super(message, 426, cause);
    }
}
exports.UpgradeRequiredException = UpgradeRequiredException;
// 428 - Precondition Required
class PreconditionRequiredException extends main_exeption_js_1.MainException {
    constructor(message = "Precondition Required", cause) {
        super(message, 428, cause);
    }
}
exports.PreconditionRequiredException = PreconditionRequiredException;
// 429 - Too Many Requests
class TooManyRequestsException extends main_exeption_js_1.MainException {
    constructor(message = "Too Many Requests", cause) {
        super(message, 429, cause);
    }
}
exports.TooManyRequestsException = TooManyRequestsException;
// 431 - Request Header Fields Too Large
class RequestHeaderFieldsTooLargeException extends main_exeption_js_1.MainException {
    constructor(message = "Request Header Fields Too Large", cause) {
        super(message, 431, cause);
    }
}
exports.RequestHeaderFieldsTooLargeException = RequestHeaderFieldsTooLargeException;
// 451 - Unavailable For Legal Reasons
class UnavailableForLegalReasonsException extends main_exeption_js_1.MainException {
    constructor(message = "Unavailable For Legal Reasons", cause) {
        super(message, 451, cause);
    }
}
exports.UnavailableForLegalReasonsException = UnavailableForLegalReasonsException;
// 500 - Internal Server Error
class InternalServerErrorException extends main_exeption_js_1.MainException {
    constructor(message = "Internal Server Error", cause) {
        super(message, 500, cause);
    }
}
exports.InternalServerErrorException = InternalServerErrorException;
// 501 - Not Implemented
class NotImplementedException extends main_exeption_js_1.MainException {
    constructor(message = "Not Implemented", cause) {
        super(message, 501, cause);
    }
}
exports.NotImplementedException = NotImplementedException;
// 502 - Bad Gateway
class BadGatewayException extends main_exeption_js_1.MainException {
    constructor(message = "Bad Gateway", cause) {
        super(message, 502, cause);
    }
}
exports.BadGatewayException = BadGatewayException;
// 503 - Service Unavailable
class ServiceUnavailableException extends main_exeption_js_1.MainException {
    constructor(message = "Service Unavailable", cause) {
        super(message, 503, cause);
    }
}
exports.ServiceUnavailableException = ServiceUnavailableException;
// 504 - Gateway Timeout
class GatewayTimeoutException extends main_exeption_js_1.MainException {
    constructor(message = "Gateway Timeout", cause) {
        super(message, 504, cause);
    }
}
exports.GatewayTimeoutException = GatewayTimeoutException;
// 505 - HTTP Version Not Supported
class HttpVersionNotSupportedException extends main_exeption_js_1.MainException {
    constructor(message = "HTTP Version Not Supported", cause) {
        super(message, 505, cause);
    }
}
exports.HttpVersionNotSupportedException = HttpVersionNotSupportedException;
// 507 - Insufficient Storage
class InsufficientStorageException extends main_exeption_js_1.MainException {
    constructor(message = "Insufficient Storage", cause) {
        super(message, 507, cause);
    }
}
exports.InsufficientStorageException = InsufficientStorageException;
// 508 - Loop Detected
class LoopDetectedException extends main_exeption_js_1.MainException {
    constructor(message = "Loop Detected", cause) {
        super(message, 508, cause);
    }
}
exports.LoopDetectedException = LoopDetectedException;
// 511 - Network Authentication Required
class NetworkAuthenticationRequiredException extends main_exeption_js_1.MainException {
    constructor(message = "Network Authentication Required", cause) {
        super(message, 511, cause);
    }
}
exports.NetworkAuthenticationRequiredException = NetworkAuthenticationRequiredException;
//# sourceMappingURL=domain.expetion.js.map