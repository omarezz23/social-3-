"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutEnum = exports.LangEnum = exports.TokenEnum = void 0;
var TokenEnum;
(function (TokenEnum) {
    TokenEnum[TokenEnum["ACCESS"] = 0] = "ACCESS";
    TokenEnum[TokenEnum["REFRESH"] = 1] = "REFRESH";
})(TokenEnum || (exports.TokenEnum = TokenEnum = {}));
;
var LangEnum;
(function (LangEnum) {
    LangEnum[LangEnum["AR"] = 0] = "AR";
    LangEnum[LangEnum["EN"] = 1] = "EN";
})(LangEnum || (exports.LangEnum = LangEnum = {}));
;
var LogoutEnum;
(function (LogoutEnum) {
    LogoutEnum[LogoutEnum["DEVICE"] = 0] = "DEVICE";
    LogoutEnum[LogoutEnum["ALL"] = 1] = "ALL";
})(LogoutEnum || (exports.LogoutEnum = LogoutEnum = {}));
;
//# sourceMappingURL=security.enum.js.map