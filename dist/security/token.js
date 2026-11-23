"use strict";
// import jwt, { type JwtPayload, type SignOptions } from "jsonwebtoken";
// import { randomUUID } from "node:crypto";
// import { Types } from "mongoose";
Object.defineProperty(exports, "__esModule", { value: true });
// import {
//   ACCESS_TOKEN_EXP,
//   ACCESS_TOKEN_SIGN,
//   ACCESS_ADMIN_TOKEN_SIGN,
//   ACCESS_USER_TOKEN_SIGN,
//   REFRESH_TOKEN_EXP,
//   REFRESH_ADMIN_TOKEN_SIGN,
//   REFRESH_USER_TOKEN_SIGN,
// } from "../config/config.js";
// import {
//   findById,
//   findOne,
// } from "../common/repository/repo.js";
// import { UserModel } from "../database/models/user.model.js";
// import { TokenEnum } from "../common/enum/security.enum.js";
// import { roleEnum } from "../common/enum/role.enum.js";
// import { compare } from "./hashing.js";
// import { BadRequestException, NotFoundException, UnauthorizedException } from "../common/errors/domain.expetion.js";
// // TYPES
// type TokenUser = {
//   _id: Types.ObjectId | string;
//   role: roleEnum;
// };
// type TokenPayload = JwtPayload & {
//   sub: string;
//   role: roleEnum;
//   jti: string;
//   aud: string | string[];
//   iat: number;
//   exp: number;
// };
// type TokenSignature = {
//   access: string;
//   refresh: string;
// };
// // REDIS KEYS
// export const userBaseKey = ({
//   UserID,
// }: {
//   UserID: string | Types.ObjectId;
// }): string => {
//   return `UserID::${UserID.toString()}`;
// };
// export const userBaseRevokeTokenKey = ({
//   UserID,
// }: {
//   UserID: string | Types.ObjectId;
// }): string => {
//   return `${userBaseKey({ UserID })}::revoketoken`;
// };
// export const userRevokeTokenKey = ({
//   UserID,
//   jti,
// }: {
//   UserID: string | Types.ObjectId;
//   jti: string;
// }): string => {
//   return `${userBaseRevokeTokenKey({ UserID })}::token::${jti}`;
// };
// // CREATE TOKEN
// export const createToken = async ({
//   payload = {},
//   options = {},
//   secret = ACCESS_TOKEN_SIGN,
// }: {
//   payload?: Record<string, unknown>;
//   options?: SignOptions;
//   secret?: string;
// } = {}): Promise<string> => {
//   return jwt.sign(payload, secret, options);
// };
// // VERIFY TOKEN
// export const verifyToken = async ({
//   token = "",
//   secret = ACCESS_TOKEN_SIGN,
// }: {
//   token?: string;
//   secret?: string;
// } = {}): Promise<string | JwtPayload> => {
//   return jwt.verify(token, secret);
// };
// // GET TOKEN SIGNATURE
// const gettokensignature = async ({
//   role = roleEnum.USER,
// }: {
//   role?: roleEnum;
// } = {}): Promise<TokenSignature> => {
//   switch (role) {
//     case roleEnum.ADMIN:
//       return {
//         access: ACCESS_ADMIN_TOKEN_SIGN,
//         refresh: REFRESH_ADMIN_TOKEN_SIGN,
//       };
//     default:
//       return {
//         access: ACCESS_USER_TOKEN_SIGN,
//         refresh: REFRESH_USER_TOKEN_SIGN,
//       };
//   }
// };
// // GET SIGNATURE BY TOKEN TYPE
// const getsignature = async ({
//   tokenType = TokenEnum.ACCESS,
//   role = roleEnum.USER,
// }: {
//   tokenType?: TokenEnum;
//   role?: roleEnum;
// } = {}): Promise<string> => {
//   const signatures = await gettokensignature({ role });
//   return tokenType === TokenEnum.ACCESS
//     ? signatures.access
//     : signatures.refresh;
// };
// // DECODE TOKEN
// export const decodeToken = async ({
//   authorization = "",
//   tokenType = TokenEnum.ACCESS,
// }: {
//   authorization?: string;
//   tokenType?: TokenEnum;
// } = {}) => {
//   const decoded = jwt.decode(authorization);
//   if (
//     !decoded ||
//     typeof decoded === "string" ||
//     !decoded.aud
//   ) {
//     throw new BadRequestException("Missing token payload");
//   }
//   const audience = Array.isArray(decoded.aud)
//     ? decoded.aud[0]
//     : decoded.aud;
//   const role = Number(audience) as roleEnum;
//   if (
//     role !== roleEnum.ADMIN &&
//     role !== roleEnum.USER
//   ) {
//     throw new BadRequestException("Invalid token role");
//   }
//   const payload = await verifyToken({
//     token: authorization,
//     secret: await getsignature({ tokenType, role }),
//   });
//   if (
//     typeof payload === "string" ||
//     !payload.sub ||
//     !payload.jti ||
//     !payload.iat
//   ) {
//     throw new BadRequestException("Missing token payload");
//   }
//   const tokenPayload = payload as TokenPayload;
//   const revoked = await exists({
//     key: userRevokeTokenKey({
//       UserID: tokenPayload.sub,
//       jti: tokenPayload.jti,
//     }),
//   });
//   if (revoked) {
//     throw new UnauthorizedException("Token has been revoked");
//   }
//   const user = await findById({
//     model: UserModel,
//     id: tokenPayload.sub,
//   });
//   if (!user) {
//     throw new NotFoundException("User not found");
//   }
//   const credentialsChangedAt =
//     user.changeCredentialsTime?.getTime() ?? 0;
//   if (credentialsChangedAt > tokenPayload.iat * 1000) {
//     throw new UnauthorizedException(
//       "Credentials have changed; please log in again"
//     );
//   }
//   return { user, payload: tokenPayload };
// };
// // CREATE LOGIN CREDENTIALS
// export const creatLoginCridintials = async ({
//   user,
//   options = {},
//   issuer,
// }: {
//   user: TokenUser;
//   options?: SignOptions;
//   issuer: string;
// }): Promise<{
//   accessToken: string;
//   refreshToken: string;
// }> => {
//   const { access, refresh } = await gettokensignature({
//     role: user.role,
//   });
//   const jwtid = randomUUID();
//   const tokenOptions: SignOptions = {
//     ...options,
//     issuer,
//     audience: [String(user.role)],
//     jwtid,
//   };
//   const accessToken = await createToken({
//     payload: {
//       sub: user._id.toString(),
//       role: user.role,
//     },
//     options: {
//       ...tokenOptions,
//       expiresIn: ACCESS_TOKEN_EXP,
//     },
//     secret: access,
//   });
//   const refreshToken = await createToken({
//     payload: {
//       sub: user._id.toString(),
//       role: user.role,
//     },
//     options: {
//       ...tokenOptions,
//       expiresIn: REFRESH_TOKEN_EXP,
//     },
//     secret: refresh,
//   });
//   return { accessToken, refreshToken };
// };
// // BASIC AUTH
// export const basicAuth = async ({
//   email,
//   password,
// }: {
//   email: string;
//   password: string;
// }) => {
//   const user = await findOne({
//     filter: { email },
//     model: UserModel,
//   });
//   if (!user) {
//     throw new NotFoundException("User not found");
//   }
//   const match = await compare(password, user.password);
//   if (!match) {
//     throw new UnauthorizedException("Invalid email or password");
//   }
//   return user;
// };
// // REVOKE TOKEN
// export const creatRevokeToken = async ({
//   payload,
// }: {
//   payload: TokenPayload;
// }): Promise<void> => {
//   const now = Math.floor(Date.now() / 1000);
//   // Remaining lifetime of the token in seconds
//   const ttl = Math.max(0, payload.exp - now);
//   if (ttl === 0) {
//     return;
//   }
//   await set({
//     key: userRevokeTokenKey({
//       UserID: payload.sub,
//       jti: payload.jti,
//     }),
//     value: payload.jti,
//     ttl,
//   });
// };
//# sourceMappingURL=token.js.map