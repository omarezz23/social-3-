"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const config_js_1 = require("../../config/config.js");
class CacheService {
    client;
    constructor() {
        if (!config_js_1.REDIS_URL) {
            throw new Error("REDIS_URL is missing");
        }
        this.client = (0, redis_1.createClient)({
            url: config_js_1.REDIS_URL,
        });
    }
    async connectRedis() {
        try {
            await this.client.connect();
            console.log("Redis connected successfully");
        }
        catch (error) {
            console.error("Redis connection error:", error);
        }
    }
    async set({ key, value, ttl = undefined, }) {
        if (typeof value === "object") {
            value = JSON.stringify(value);
        }
        return await this.client.set(key, value, {
            ...(ttl !== undefined ? { EX: ttl } : {}),
        });
    }
    async get({ key }) {
        const value = await this.client.get(key);
        try {
            return JSON.parse(value);
        }
        catch {
            return value;
        }
    }
    async exists({ key }) {
        return await this.client.exists(key);
    }
    async update({ key, value, ttl = undefined, }) {
        if (!(await this.exists({ key }))) {
            return 0;
        }
        return await this.set({ key, value, ttl });
    }
    async del({ key }) {
        return await this.client.del(key);
    }
    async keys({ prefix }) {
        return await this.client.keys(`${prefix}*`);
    }
    async ttl({ key }) {
        return await this.client.ttl(key);
    }
    async expire({ key, ttl }) {
        return await this.client.expire(key, ttl);
    }
    async incr({ key }) {
        return await this.client.incr(key);
    }
    async decr({ key }) {
        return await this.client.decr(key);
    }
    async incby({ key, increment }) {
        return await this.client.incrBy(key, increment);
    }
}
exports.default = new CacheService();
//# sourceMappingURL=redis.connection.js.map