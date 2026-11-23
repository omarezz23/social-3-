"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const index_js_1 = require("../../common/enum/index.js");
const userSchema = new mongoose_1.default.Schema({
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
        required: function () {
            return this.provider == index_js_1.providerEnum.SYSTEM;
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
        enum: index_js_1.GenderEnum,
        default: index_js_1.GenderEnum.MALE,
    },
    role: {
        type: Number,
        enum: index_js_1.roleEnum,
        default: index_js_1.roleEnum.USER,
    },
    provider: {
        type: Number,
        enum: index_js_1.providerEnum,
        default: index_js_1.providerEnum.SYSTEM,
    },
    otp: {
        type: String,
    },
    changeCredentialsTime: Date,
}, {
    collection: "users",
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    strict: true,
    strictQuery: true,
    autoIndex: true,
});
userSchema
    .virtual("fullName")
    .set(function (value) {
    const [firstname = "", ...rest] = value.trim().split(" ");
    const lastname = rest.join(" ");
    this.firstname = firstname;
    this.lastname = lastname;
})
    .get(function () {
    return `${this.firstname} ${this.lastname}`;
});
exports.UserModel = mongoose_1.default.model("User", userSchema, "users") || mongoose_1.default.model("User");
//# sourceMappingURL=user.model.js.map