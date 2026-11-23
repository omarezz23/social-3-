import { AnyKeys, HydratedDocument, Model, QueryFilter, QueryOptions, UpdateQuery } from "mongoose";
export declare abstract class DataBaseRepo<TRawDoc> {
    protected model: Model<TRawDoc>;
    constructor(model: Model<TRawDoc>);
    create(data: AnyKeys<TRawDoc>): Promise<HydratedDocument<TRawDoc>>;
    create(data: AnyKeys<TRawDoc>[]): Promise<HydratedDocument<TRawDoc>[]>;
    findOne(filter: QueryFilter<TRawDoc>): Promise<HydratedDocument<TRawDoc> | null>;
    findOne(): Promise<HydratedDocument<TRawDoc> | null>;
    findById(id: string): Promise<HydratedDocument<TRawDoc> | null>;
    find(filter: QueryFilter<TRawDoc>): Promise<HydratedDocument<TRawDoc>[]>;
    find(): Promise<HydratedDocument<TRawDoc>[]>;
    findOneAndUpdate(filter: QueryFilter<TRawDoc>, update: UpdateQuery<TRawDoc>): Promise<HydratedDocument<TRawDoc> | null>;
    findOneAndUpdate(filter: QueryFilter<TRawDoc>, update: UpdateQuery<TRawDoc>, options: QueryOptions<TRawDoc>): Promise<HydratedDocument<TRawDoc> | null>;
    findByIdAndUpdate(id: string, update: UpdateQuery<TRawDoc>): Promise<HydratedDocument<TRawDoc> | null>;
    findByIdAndUpdate(id: string, update: UpdateQuery<TRawDoc>, options: QueryOptions<TRawDoc>): Promise<HydratedDocument<TRawDoc> | null>;
    updateOne(filter: QueryFilter<TRawDoc>, update: UpdateQuery<TRawDoc>): Promise<unknown>;
    updateMany(filter: QueryFilter<TRawDoc>, update: UpdateQuery<TRawDoc>): Promise<unknown>;
    findOneAndDelete(filter: QueryFilter<TRawDoc>): Promise<HydratedDocument<TRawDoc> | null>;
    findByIdAndDelete(id: string): Promise<HydratedDocument<TRawDoc> | null>;
    deleteOne(filter: QueryFilter<TRawDoc>): Promise<unknown>;
    deleteMany(): Promise<unknown>;
    deleteMany(filter: QueryFilter<TRawDoc>): Promise<unknown>;
    countDocuments(): Promise<number>;
    countDocuments(filter: QueryFilter<TRawDoc>): Promise<number>;
    exists(filter: QueryFilter<TRawDoc>): Promise<boolean>;
}
//# sourceMappingURL=base.repo.d.ts.map