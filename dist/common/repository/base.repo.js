"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseRepo = void 0;
class DataBaseRepo {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        if (Array.isArray(data)) {
            return this.model.create(data);
        }
        return this.model.create(data);
    }
    async findOne(filter = {}) {
        return this.model.findOne(filter);
    }
    async findById(id) {
        if (!id)
            return null;
        return this.model.findById(id);
    }
    async find(filter = {}) {
        return this.model.find(filter);
    }
    async findOneAndUpdate(filter, update, options = { new: true }) {
        return this.model.findOneAndUpdate(filter, update, options);
    }
    async findByIdAndUpdate(id, update, options = { new: true }) {
        return this.model.findByIdAndUpdate(id, update, options);
    }
    // UPDATE ONE
    async updateOne(filter, update) {
        return this.model.updateOne(filter, update);
    }
    // UPDATE MANY
    async updateMany(filter, update) {
        return this.model.updateMany(filter, update);
    }
    // FIND ONE AND DELETE
    async findOneAndDelete(filter) {
        return this.model.findOneAndDelete(filter);
    }
    // FIND BY ID AND DELETE
    async findByIdAndDelete(id) {
        return this.model.findByIdAndDelete(id);
    }
    // DELETE ONE
    async deleteOne(filter) {
        return this.model.deleteOne(filter);
    }
    async deleteMany(filter = {}) {
        return this.model.deleteMany(filter);
    }
    async countDocuments(filter = {}) {
        return this.model.countDocuments(filter);
    }
    async exists(filter) {
        const result = await this.model.exists(filter);
        return result !== null;
    }
}
exports.DataBaseRepo = DataBaseRepo;
//# sourceMappingURL=base.repo.js.map