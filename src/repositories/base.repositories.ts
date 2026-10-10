import mongoose from "mongoose"
export abstract class BaseRepository<T> {
    constructor(protected model: mongoose.Model<T>) {}

    async create(document: Partial<T>): Promise<T> {
        return await this.model.create(document);
    }

    async findOne(): Promise<T | null> {
        return await this.model.findOne();
    }

    async findAll(): Promise<T[]> {
        return await this.model.find();
    }

    async findById(id: string): Promise<T | null> {
        return await this.model.findById(id);
    }

    async update(id: string, update: Partial<T>): Promise<T | null> {
        return await this.model.findByIdAndUpdate(id, update, { new: true });
    }

    async delete(id: string): Promise<T | null> {
        return await this.model.findByIdAndDelete(id);
    }
}
