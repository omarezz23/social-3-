"use strict";
// export const signup =(data:any) =>{
//     return "fuck"
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const domain_expetion_js_1 = require("../../common/errors/domain.expetion.js");
const user_repo_js_1 = require("../../common/repository/user.repo.js");
const hashing_js_1 = require("../../security/hashing.js");
class AuthenticationService {
    userRepo;
    constructor() {
        this.userRepo = new user_repo_js_1.UserRepo();
    }
    async signup(data) {
        const userExist = await this.userRepo.findOne({
            email: data.body.email,
        });
        if (userExist) {
            throw new domain_expetion_js_1.ConflictException("Email already exists");
        }
        const password = await (0, hashing_js_1.hash)(data.body.password);
        const user = await this.userRepo.create([
            {
                fullName: data.body.fullName,
                email: data.body.email,
                password,
                phone: data.body.phone,
            },
        ]);
        if (!user[0]) {
            throw new Error("User creation failed");
        }
        return user[0].toJSON();
    }
}
exports.AuthenticationService = AuthenticationService;
exports.default = new AuthenticationService();
//# sourceMappingURL=auth.service.js.map