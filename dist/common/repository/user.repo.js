"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const user_model_js_1 = require("../../database/models/user.model.js");
const base_repo_js_1 = require("./base.repo.js");
class UserRepo extends base_repo_js_1.DataBaseRepo {
    constructor() {
        super(user_model_js_1.UserModel);
    }
}
exports.UserRepo = UserRepo;
//# sourceMappingURL=user.repo.js.map