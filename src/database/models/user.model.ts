import mongoose from "mongoose";
import { GenderEnum, providerEnum, roleEnum } from "../../common/enum/index.js";
import { IUser } from "../../common/interfaces/usermodel.js";

const userSchema = new mongoose.Schema<IUser>(
  {
    firstname: {
      type: String,
      minlength: 3,
      maxlength: 30,
      required: true,
    },
    lastname: {
      type: String,
      minlength: 3,
      maxlength: 30,
      required: true,
    },

    email: {
      type: String,
      minlength: 5,
      maxlength: 50,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: function ():boolean {
        return this.provider == providerEnum.SYSTEM;
      },
    },

    phone: {
      type: String,
      default: null,
    },
    dob: {
      type: Date,
      default: null,
    },
    confirmEmail: {
      type: Date,
    },
    image: {
      type: String,
      default: null,
    },
    coverImage: {
      type: String,
      default: null,
    },
    gender: {
      type: Number,
      enum: GenderEnum,
      default: GenderEnum.MALE,
    },
    role:{
      type: Number,
      enum: roleEnum,
      default: roleEnum.USER,
    },
     provider:{
      type: Number,
      enum: providerEnum,
      default: providerEnum.SYSTEM,
    },
    otp: {
      type: String,
    },
    changeCredentialsTime : Date ,
  },
  {
    collection: "users",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    strict: true,
    strictQuery: true,
    autoIndex: true,
  },
);



userSchema
  .virtual("fullName")
  .set(function (this: { firstname: string; lastname: string }, value: string): void {
    const [firstname = "", ...rest] = value.trim().split(" ");
    const lastname = rest.join(" ");

    this.firstname = firstname;
    this.lastname = lastname;
  })
  .get(function (this: { firstname: string; lastname: string }): string {
    return `${this.firstname} ${this.lastname}`;
  });


export const UserModel = mongoose.model<IUser>("User", userSchema, "users") || mongoose.model<IUser>("User");
