import { MainException } from "./main.exeption.js";

// 400 - Bad Request
export class BadRequestException extends MainException {
  constructor(message = "Bad Request", cause?: unknown) {
    super(message, 400, cause);
  }
}

// 401 - Unauthorized
export class UnauthorizedException extends MainException {
  constructor(message = "Unauthorized", cause?: unknown) {
    super(message, 401, cause);
  }
}

// 402 - Payment Required
export class PaymentRequiredException extends MainException {
  constructor(message = "Payment Required", cause?: unknown) {
    super(message, 402, cause);
  }
}

// 403 - Forbidden
export class ForbiddenException extends MainException {
  constructor(message = "Forbidden", cause?: unknown) {
    super(message, 403, cause);
  }
}

// 404 - Not Found
export class NotFoundException extends MainException {
  constructor(message = "Not Found", cause?: unknown) {
    super(message, 404, cause);
  }
}

// 405 - Method Not Allowed
export class MethodNotAllowedException extends MainException {
  constructor(message = "Method Not Allowed", cause?: unknown) {
    super(message, 405, cause);
  }
}

// 406 - Not Acceptable
export class NotAcceptableException extends MainException {
  constructor(message = "Not Acceptable", cause?: unknown) {
    super(message, 406, cause);
  }
}

// 408 - Request Timeout
export class RequestTimeoutException extends MainException {
  constructor(message = "Request Timeout", cause?: unknown) {
    super(message, 408, cause);
  }
}

// 409 - Conflict
export class ConflictException extends MainException {
  constructor(message = "Conflict", cause?: unknown) {
    super(message, 409, cause);
  }
}

// 410 - Gone
export class GoneException extends MainException {
  constructor(message = "Gone", cause?: unknown) {
    super(message, 410, cause);
  }
}

// 411 - Length Required
export class LengthRequiredException extends MainException {
  constructor(message = "Length Required", cause?: unknown) {
    super(message, 411, cause);
  }
}

// 412 - Precondition Failed
export class PreconditionFailedException extends MainException {
  constructor(message = "Precondition Failed", cause?: unknown) {
    super(message, 412, cause);
  }
}

// 413 - Content Too Large
export class PayloadTooLargeException extends MainException {
  constructor(message = "Content Too Large", cause?: unknown) {
    super(message, 413, cause);
  }
}

// 415 - Unsupported Media Type
export class UnsupportedMediaTypeException extends MainException {
  constructor(message = "Unsupported Media Type", cause?: unknown) {
    super(message, 415, cause);
  }
}

// 418 - I'm a Teapot
export class ImATeapotException extends MainException {
  constructor(message = "I'm a Teapot", cause?: unknown) {
    super(message, 418, cause);
  }
}

// 422 - Unprocessable Content
export class UnprocessableEntityException extends MainException {
  constructor(message = "Unprocessable Content", cause?: unknown) {
    super(message, 422, cause);
  }
}

// 423 - Locked
export class LockedException extends MainException {
  constructor(message = "Locked", cause?: unknown) {
    super(message, 423, cause);
  }
}

// 424 - Failed Dependency
export class FailedDependencyException extends MainException {
  constructor(message = "Failed Dependency", cause?: unknown) {
    super(message, 424, cause);
  }
}

// 425 - Too Early
export class TooEarlyException extends MainException {
  constructor(message = "Too Early", cause?: unknown) {
    super(message, 425, cause);
  }
}

// 426 - Upgrade Required
export class UpgradeRequiredException extends MainException {
  constructor(message = "Upgrade Required", cause?: unknown) {
    super(message, 426, cause);
  }
}

// 428 - Precondition Required
export class PreconditionRequiredException extends MainException {
  constructor(message = "Precondition Required", cause?: unknown) {
    super(message, 428, cause);
  }
}

// 429 - Too Many Requests
export class TooManyRequestsException extends MainException {
  constructor(message = "Too Many Requests", cause?: unknown) {
    super(message, 429, cause);
  }
}

// 431 - Request Header Fields Too Large
export class RequestHeaderFieldsTooLargeException extends MainException {
  constructor(
    message = "Request Header Fields Too Large",
    cause?: unknown
  ) {
    super(message, 431, cause);
  }
}

// 451 - Unavailable For Legal Reasons
export class UnavailableForLegalReasonsException extends MainException {
  constructor(
    message = "Unavailable For Legal Reasons",
    cause?: unknown
  ) {
    super(message, 451, cause);
  }
}

// 500 - Internal Server Error
export class InternalServerErrorException extends MainException {
  constructor(message = "Internal Server Error", cause?: unknown) {
    super(message, 500, cause);
  }
}

// 501 - Not Implemented
export class NotImplementedException extends MainException {
  constructor(message = "Not Implemented", cause?: unknown) {
    super(message, 501, cause);
  }
}

// 502 - Bad Gateway
export class BadGatewayException extends MainException {
  constructor(message = "Bad Gateway", cause?: unknown) {
    super(message, 502, cause);
  }
}

// 503 - Service Unavailable
export class ServiceUnavailableException extends MainException {
  constructor(message = "Service Unavailable", cause?: unknown) {
    super(message, 503, cause);
  }
}

// 504 - Gateway Timeout
export class GatewayTimeoutException extends MainException {
  constructor(message = "Gateway Timeout", cause?: unknown) {
    super(message, 504, cause);
  }
}

// 505 - HTTP Version Not Supported
export class HttpVersionNotSupportedException extends MainException {
  constructor(message = "HTTP Version Not Supported", cause?: unknown) {
    super(message, 505, cause);
  }
}

// 507 - Insufficient Storage
export class InsufficientStorageException extends MainException {
  constructor(message = "Insufficient Storage", cause?: unknown) {
    super(message, 507, cause);
  }
}

// 508 - Loop Detected
export class LoopDetectedException extends MainException {
  constructor(message = "Loop Detected", cause?: unknown) {
    super(message, 508, cause);
  }
}

// 511 - Network Authentication Required
export class NetworkAuthenticationRequiredException extends MainException {
  constructor(
    message = "Network Authentication Required",
    cause?: unknown
  ) {
    super(message, 511, cause);
  }
}