import * as mongoose from 'mongoose';

export const ItemsSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    description: String,
})