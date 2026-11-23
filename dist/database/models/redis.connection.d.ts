declare class CacheService {
    private client;
    constructor();
    connectRedis(): Promise<void>;
    set({ key, value, ttl, }: {
        key: string;
        value: any;
        ttl?: number | undefined;
    }): Promise<string | null>;
    get({ key }: {
        key: string;
    }): Promise<any>;
    exists({ key }: {
        key: string;
    }): Promise<number>;
    update({ key, value, ttl, }: {
        key: string;
        value: any;
        ttl?: number;
    }): Promise<string | 0 | null>;
    del({ key }: {
        key: string;
    }): Promise<number>;
    keys({ prefix }: {
        prefix: string;
    }): Promise<string[]>;
    ttl({ key }: {
        key: string;
    }): Promise<number>;
    expire({ key, ttl }: {
        key: string;
        ttl: number;
    }): Promise<number>;
    incr({ key }: {
        key: string;
    }): Promise<number>;
    decr({ key }: {
        key: string;
    }): Promise<number>;
    incby({ key, increment }: {
        key: string;
        increment: number;
    }): Promise<number>;
}
declare const _default: CacheService;
export default _default;
//# sourceMappingURL=redis.connection.d.ts.map