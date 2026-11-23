"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const domain_expetion_1 = require("../common/errors/domain.expetion");
const validation = (Schema) => {
    return (req, res, next) => {
        const lang = Number(req.headers['accept-language']);
        //console.log({lang})
        const validationResult = Schema(lang).safeParse({
            body: req.body,
            query: req.query,
            params: req.params,
            // files: req.files,
            // file: req.file,
            // headers: req.headers,
        });
        //console.log({ validationResult });
        if (!validationResult.success) {
            throw new domain_expetion_1.BadRequestException("validation error", validationResult.error.issues);
        }
        req.validate = validationResult.data;
        next();
    };
};
exports.validation = validation;
//# sourceMappingURL=validation.middleware.js.map