import { SignupDTO } from "./dto/auth.dto.js";
import { IUser } from "../../common/interfaces/usermodel.js";
export declare class AuthenticationService {
    private userRepo;
    constructor();
    signup(data: SignupDTO): Promise<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
declare const _default: AuthenticationService;
export default _default;
//# sourceMappingURL=auth.service.d.ts.map