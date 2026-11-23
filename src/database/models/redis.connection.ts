import { createClient, type RedisClientType } from "redis";
import { REDIS_URL } from "../../config/config.js";

class CacheService {
  private client: RedisClientType;

  constructor() {
    if (!REDIS_URL) {
      throw new Error("REDIS_URL is missing");
    }
    this.client = createClient({
      url: REDIS_URL,
    });
  }

  async connectRedis(): Promise<void> {
    try {
      await this.client.connect();
      console.log("Redis connected successfully");
    } catch (error: unknown) {
      console.error("Redis connection error:", error);
    }
  }

  async set({
    key,
    value,
    ttl = undefined,
  }: {
    key: string;
    value: any;
    ttl?: number | undefined;
  }) {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    return await this.client.set(key, value, {
      ...(ttl !== undefined ? { EX: ttl } : {}),
    });
  }

  async get({ key }: { key: string }) {
    const value = await this.client.get(key);
    try {
      return JSON.parse(value as string);
    } catch {
      return value;
    }
  }

  async exists({ key }: { key: string }) {
    return await this.client.exists(key);
  }

  async update({
    key,
    value,
    ttl = undefined,
  }: {
    key: string;
    value: any;
    ttl?: number;
  }) {
    if (!(await this.exists({ key }))) {
      return 0;
    }
    return await this.set({ key, value, ttl });
  }

  async del({ key }: { key: string }) {
    return await this.client.del(key);
  }

  async keys({ prefix }: { prefix: string }) {
    return await this.client.keys(`${prefix}*`);
  }

  async ttl({ key }: { key: string }) {
    return await this.client.ttl(key);
  }

  async expire({ key, ttl }: { key: string; ttl: number }) {
    return await this.client.expire(key, ttl);
  }

  async incr({ key }: { key: string }) {
    return await this.client.incr(key);
  }

  async decr({ key }: { key: string }) {
    return await this.client.decr(key);
  }

  async incby({ key, increment }: { key: string; increment: number }) {
    return await this.client.incrBy(key, increment);
  }
}

export const cacheService = new CacheService();
