import { Filter } from "mongodb";
import { AnyKeys, HydratedDocument, Model, QueryFilter, QueryOptions, UpdateQuery } from "mongoose";

export abstract class DataBaseRepo<TRawDoc> {
  constructor(protected model: Model<TRawDoc>) {}

  // CREATE
  async create(
    data: AnyKeys<TRawDoc>
  ): Promise<HydratedDocument<TRawDoc>>;

  async create(
    data: AnyKeys<TRawDoc>[]
  ): Promise<HydratedDocument<TRawDoc>[]>;

  async create(
    data: AnyKeys<TRawDoc> | AnyKeys<TRawDoc>[]
  ): Promise<HydratedDocument<TRawDoc> | HydratedDocument<TRawDoc>[]> {
    if (Array.isArray(data)) {
      return this.model.create(data);
    }

    return this.model.create(data);
  }

  // FIND ONE
  async findOne(
    filter: QueryFilter<TRawDoc>
  ): Promise<HydratedDocument<TRawDoc> | null>;

  async findOne(): Promise<HydratedDocument<TRawDoc> | null>;

  async findOne(
    filter: QueryFilter<TRawDoc> = {}
  ): Promise<HydratedDocument<TRawDoc> | null> {
    return this.model.findOne(filter);
  }

  // FIND BY ID
  async findById(
    id: string
  ): Promise<HydratedDocument<TRawDoc> | null>;

  async findById(
    id: string | undefined
  ): Promise<HydratedDocument<TRawDoc> | null> {
    if (!id) return null;
    return this.model.findById(id);
  }

  // FIND
  async find(
    filter: QueryFilter<TRawDoc>
  ): Promise<HydratedDocument<TRawDoc>[]>;

  async find(): Promise<HydratedDocument<TRawDoc>[]>;

  async find(
    filter: QueryFilter<TRawDoc> = {}
  ): Promise<HydratedDocument<TRawDoc>[]> {
    return this.model.find(filter);
  }

  // FIND ONE AND UPDATE
  async findOneAndUpdate(
    filter: QueryFilter<TRawDoc>,
    update: UpdateQuery<TRawDoc>
  ): Promise<HydratedDocument<TRawDoc> | null>;

  async findOneAndUpdate(
    filter: QueryFilter<TRawDoc>,
    update: UpdateQuery<TRawDoc>,
    options: QueryOptions<TRawDoc>
  ): Promise<HydratedDocument<TRawDoc> | null>;

  async findOneAndUpdate(
    filter: QueryFilter<TRawDoc>,
    update: UpdateQuery<TRawDoc>,
    options: QueryOptions<TRawDoc> = { new: true }
  ): Promise<HydratedDocument<TRawDoc> | null> {
    return this.model.findOneAndUpdate(filter, update, options);
  }

  // FIND BY ID AND UPDATE
  async findByIdAndUpdate(
    id: string,
    update: UpdateQuery<TRawDoc>
  ): Promise<HydratedDocument<TRawDoc> | null>;

  async findByIdAndUpdate(
    id: string,
    update: UpdateQuery<TRawDoc>,
    options: QueryOptions<TRawDoc>
  ): Promise<HydratedDocument<TRawDoc> | null>;

  async findByIdAndUpdate(
    id: string,
    update: UpdateQuery<TRawDoc>,
    options: QueryOptions<TRawDoc> = { new: true }
  ): Promise<HydratedDocument<TRawDoc> | null> {
    return this.model.findByIdAndUpdate(id, update, options);
  }

  // UPDATE ONE
  async updateOne(
    filter: QueryFilter<TRawDoc>,
    update: UpdateQuery<TRawDoc>
  ): Promise<unknown> {
    return this.model.updateOne(filter, update);
  }

  // UPDATE MANY
  async updateMany(
    filter: QueryFilter<TRawDoc>,
    update: UpdateQuery<TRawDoc>
  ): Promise<unknown> {
    return this.model.updateMany(filter, update);
  }

  // FIND ONE AND DELETE
  async findOneAndDelete(
    filter: QueryFilter<TRawDoc>
  ): Promise<HydratedDocument<TRawDoc> | null> {
    return this.model.findOneAndDelete(filter);
  }

  // FIND BY ID AND DELETE
  async findByIdAndDelete(
    id: string
  ): Promise<HydratedDocument<TRawDoc> | null> {
    return this.model.findByIdAndDelete(id);
  }

  // DELETE ONE
  async deleteOne(
    filter: QueryFilter<TRawDoc>
  ): Promise<unknown> {
    return this.model.deleteOne(filter);
  }

  // DELETE MANY
  async deleteMany(): Promise<unknown>;

  async deleteMany(
    filter: QueryFilter<TRawDoc>
  ): Promise<unknown>;

  async deleteMany(
    filter: QueryFilter<TRawDoc> = {}
  ): Promise<unknown> {
    return this.model.deleteMany(filter);
  }

  // COUNT DOCUMENTS
  async countDocuments(): Promise<number>;

  async countDocuments(
    filter: QueryFilter<TRawDoc>
  ): Promise<number>;

  async countDocuments(
    filter: QueryFilter<TRawDoc> = {}
  ): Promise<number> {
    return this.model.countDocuments(filter);
  }

  // EXISTS
  async exists(
    filter: QueryFilter<TRawDoc>
  ): Promise<boolean>;

  async exists(
    filter: QueryFilter<TRawDoc>
  ): Promise<boolean> {
    const result = await this.model.exists(filter);
    return result !== null;
  }
  
  /////////////////////////////////////////////////////////////////
//   async create(data: AnyKeys<TRawDoc>[]): Promise<HydratedDocument<TRawDoc>[]> {
//     return await this.model.create(data);
//   }
//   //////////
//   async findOne(
//     filter: QueryFilter<TRawDoc>
//   ): Promise<HydratedDocument<TRawDoc> | null> {
//     return await this.model.findOne(filter);
//   }

//   async findById(
//     id: string
//   ): Promise<HydratedDocument<TRawDoc> | null> {
//     return await this.model.findById(id);
//   }

//   async find(
//     filter: QueryFilter<TRawDoc> = {}
//   ): Promise<HydratedDocument<TRawDoc>[]> {
//     return await this.model.find(filter);
//   }

//   async findOneAndUpdate(
//     filter: QueryFilter<TRawDoc>,
//     update: UpdateQuery<TRawDoc>,
//     options: QueryOptions<TRawDoc> = { new: true }
//   ): Promise<HydratedDocument<TRawDoc> | null> {
//     return await this.model.findOneAndUpdate(
//       filter,
//       update,
//       options
//     );
//   }

//   async findByIdAndUpdate(
//     id: string,
//     update: UpdateQuery<TRawDoc>,
//     options: QueryOptions<TRawDoc> = { new: true }
//   ): Promise<HydratedDocument<TRawDoc> | null> {
//     return await this.model.findByIdAndUpdate(
//       id,
//       update,
//       options
//     );
//   }

//   async updateOne(
//     filter: QueryFilter<TRawDoc>,
//     update: UpdateQuery<TRawDoc>
//   ) {
//     return await this.model.updateOne(filter, update);
//   }

//   async updateMany(
//     filter: QueryFilter<TRawDoc>,
//     update: UpdateQuery<TRawDoc>
//   ) {
//     return await this.model.updateMany(filter, update);
//   }

//   async findOneAndDelete(
//     filter: QueryFilter<TRawDoc>
//   ): Promise<HydratedDocument<TRawDoc> | null> {
//     return await this.model.findOneAndDelete(filter);
//   }

//   async findByIdAndDelete(
//     id: string
//   ): Promise<HydratedDocument<TRawDoc> | null> {
//     return await this.model.findByIdAndDelete(id);
//   }

//   async deleteOne(filter: QueryFilter<TRawDoc>) {
//     return await this.model.deleteOne(filter);
//   }

//   async deleteMany(filter: QueryFilter<TRawDoc> = {}) {
//     return await this.model.deleteMany(filter);
//   }

//   async countDocuments(
//     filter: QueryFilter<TRawDoc> = {}
//   ): Promise<number> {
//     return await this.model.countDocuments(filter);
//   }

//   async exists(
//     filter: QueryFilter<TRawDoc>
//   ) {
//     return await this.model.exists(filter);
//   }
}
