import { GenderEnum } from "../enum/enum.gender.js";
import { providerEnum, roleEnum } from "../enum/role.enum.js";

export interface IUser {
  firstname: string;
  lastname: string;
  fullName?:string;
  email: string;
  password?: string;
  phone?: string | null;
  dob?: Date | null;
  confirmEmail?: Date;
  image?: string | null;
  coverImage?: string | null;
  gender: GenderEnum;
  role: roleEnum;
  provider: providerEnum;
  otp?: string;
  changeCredentialsTime?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}