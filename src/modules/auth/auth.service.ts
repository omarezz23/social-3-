// export const signup =(data:any) =>{
//     return "fuck"
// }

import { SignupDTO } from "./dto/auth.dto.js";

import { UserModel } from "../../database/models/user.model.js";
import { ConflictException } from "../../common/errors/domain.expetion.js";
import { HydratedDocument, HydrateOptions } from "mongoose";
import { IUser } from "../../common/interfaces/usermodel.js";
import { UserRepo } from "../../common/repository/user.repo.js";
import { hash } from "../../security/hashing.js";

export class AuthenticationService {
  private userRepo: UserRepo;

  constructor() {
    this.userRepo = new UserRepo();
  }

  async signup(data: SignupDTO) {
    const userExist = await this.userRepo.findOne({
      email: data.body.email,
    });

    if (userExist) {
      throw new ConflictException("Email already exists");
    }
    const password = await hash(data.body.password);
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

export default new AuthenticationService();
