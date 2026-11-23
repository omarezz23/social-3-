import { UserModel } from "../../database/models/user.model.js";
import { IUser } from "../interfaces/usermodel.js";
import { DataBaseRepo } from "./base.repo.js";

export class UserRepo extends DataBaseRepo<IUser> {
  constructor() {
    super(UserModel);
  }
}

