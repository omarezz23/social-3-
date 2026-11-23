
import mongoose from "mongoose";
import jwt, { Secret, type JwtPayload, type SignOptions } from "jsonwebtoken";
import { randomUUID } from "crypto";

import { UserRepo } from "../common/repository/user.repo.js";
import { cacheService } from "../database/models/redis.connection.js";
import { BadRequestException, NotFoundException, UnauthorizedException } from "../common/errors/domain.expetion.js";
import { compare } from "./hashing.js";
import { ACCESS_ADMIN_TOKEN_SIGN, ACCESS_TOKEN_SIGN, ACCESS_USER_TOKEN_SIGN, REFRESH_ADMIN_TOKEN_SIGN, REFRESH_TOKEN_EXP, REFRESH_USER_TOKEN_SIGN } from "../config/config.js";
import { TokenEnum } from "../common/enum/security.enum.js";
import { roleEnum } from "../common/enum/role.enum.js";

type userIdType = mongoose.Types.ObjectId | string;

export class TokenService {
  private readonly userRepository: UserRepo;
  private readonly cacheService = cacheService;

  constructor() {
    this.userRepository = new UserRepo();
  }

  // USER BASE KEY
  userBaseKey({ UserID }: { UserID: userIdType }): string {
    return `UserID::${UserID.toString()}`;
  }

  // USER REVOKE TOKEN KEY
  userBaseRevokeTokenKey({ UserID }: { UserID: userIdType }): string {
    return `${this.userBaseKey({ UserID })}::revoketoken`;
  }

  // USER TOKEN KEY
  userRevokeTokenKey({
    UserID,
    jti,
  }: {
    UserID: userIdType;
    jti: string;
  }): string {
    return `${this.userBaseRevokeTokenKey({ UserID })}::token::${jti}`;
  }

  // CREATE TOKEN
  async createToken({
    payload,
    options ,
    secret = ACCESS_TOKEN_SIGN,
  }:{
    payload?: object;
    options?: SignOptions;
    secret?: Secret;
  }): Promise<string> {
    return jwt.sign(payload, secret, options);
  }

  // VERIFY TOKEN
  async verifyToken({
    token = "",
    secret = ACCESS_TOKEN_SIGN,
  }: {
    token?: string;
    secret?: Secret;
  } = {}): Promise<string | JwtPayload> {
    return jwt.verify(token, secret);
  }

  // GET TOKEN SIGNATURE
  async getSignature({
    tokenType = TokenEnum.ACCESS,
    role = roleEnum.USER,
  } = {}) {
    const signatures = await this.getTokenSignature({ role });

    return tokenType === TokenEnum.ACCESS
      ? signatures.access
      : signatures.refresh;
  }

  // GET TOKEN SIGNATURES
  async getTokenSignature({ role = roleEnum.USER } = {}) {
    switch (role) {
      case roleEnum.ADMIN:
        return {
          access: ACCESS_ADMIN_TOKEN_SIGN,
          refresh: REFRESH_ADMIN_TOKEN_SIGN,
        };

      default:
        return {
          access: ACCESS_USER_TOKEN_SIGN,
          refresh: REFRESH_USER_TOKEN_SIGN,
        };
    }
  }

  // DECODE TOKEN
  async decodeToken({
    authorization = "",
    tokenType = TokenEnum.ACCESS,
  } = {}) {
    const decoded = jwt.decode(authorization) as JwtPayload | null;

    if (!decoded?.aud || !Array.isArray(decoded.aud) || !decoded.aud.length) {
      throw new BadRequestException("Missing payload");
    }

    const payload = await this.verifyToken({
      token: authorization,
      secret: await this.getSignature({
        tokenType,
        role: decoded.aud[0],
      }),
    });

    if (typeof payload === "string" || !payload.sub || !payload.jti || !payload.iat) {
      throw new BadRequestException("Missing payload");
    }

    const revoked = await this.cacheService.exists({
      key: this.userRevokeTokenKey({
        UserID: payload.sub,
        jti: payload.jti,
      }),
    });

    if (revoked) {
      throw new UnauthorizedException("Logged out");
    }

    const user = await UserRepo.findbyid({
      id: payload.sub,
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    if (
      (user.changeCredentialsTime?.getTime() ?? 0) >
      payload.iat * 1000
    ) {
      throw new UnauthorizedException("Credentials changed");
    }

    return { user, payload };
  }

  // CREATE LOGIN CREDENTIALS
  async createLoginCredentials({
    user,
    options = {},
    issuer,
  }: {
    user: any;
    options?: SignOptions;
    issuer: string;
  }) {
    const { access, refresh } = await this.getTokenSignature({
      role: user.role,
    });

    const jwtid = randomUUID();

    const accessToken = await this.createToken({
      payload: { sub: user._id.toString(), role: user.role },
      options: {
        ...options,
        issuer,
        audience: [user.role],
        expiresIn: ACCESS_TOKEN_EXP,
        jwtid,
      },
      secret: access,
    });

    const refreshToken = await this.createToken({
      payload: { sub: user._id.toString(), role: user.role },
      options: {
        ...options,
        issuer,
        audience: [user.role],
        expiresIn: REFRESH_TOKEN_EXP,
        jwtid,
      },
      secret: refresh,
    });

    return { accessToken, refreshToken };
  }

  // BASIC AUTH
  async basicAuth({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const user = await this.userRepository.findOne({
      filter: { email },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const match = await compare(password, user.password);

    if (!match) {
      throw new UnauthorizedException("Invalid email or password");
    }

    return user;
  }

  // CREATE REVOKE TOKEN
  async createRevokeToken({ payload }: { payload: JwtPayload }) {
    if (!payload.sub || !payload.jti || !payload.iat) {
      throw new BadRequestException("Invalid token payload");
    }

    const refreshExpiresIn = payload.iat + REFRESH_TOKEN_EXP;
    const ttl = refreshExpiresIn - Math.floor(Date.now() / 1000);

    if (ttl <= 0) {
      return;
    }

    await this.cacheService.set({
      key: this.userRevokeTokenKey({
        UserID: payload.sub,
        jti: payload.jti,
      }),
      value: payload.jti,
      ttl,
    });
  }
}

export const tokenService = new TokenService();
