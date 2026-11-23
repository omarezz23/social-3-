"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerEnum = exports.roleEnum = void 0;
var roleEnum;
(function (roleEnum) {
    roleEnum[roleEnum["USER"] = 0] = "USER";
    roleEnum[roleEnum["ADMIN"] = 1] = "ADMIN";
})(roleEnum || (exports.roleEnum = roleEnum = {}));
;
var providerEnum;
(function (providerEnum) {
    providerEnum[providerEnum["SYSTEM"] = 0] = "SYSTEM";
    providerEnum[providerEnum["GOOGLE"] = 1] = "GOOGLE";
})(providerEnum || (exports.providerEnum = providerEnum = {}));
;
//# sourceMappingURL=role.enum.js.map