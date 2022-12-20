import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    product_name: String,
    code: String
})

export class Product {
    product_name: string
    code: string
}