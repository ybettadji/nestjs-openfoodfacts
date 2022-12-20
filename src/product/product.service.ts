import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/core/entities/product.entities';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private productModel: Model<Product>) { }

    async getByCode(code: string): Promise<object> {

        try {
            const product = await this.productModel.find({ "code": code })
            return product
        } catch (error) {
            throw new Error("Error while searching for the product in the database");
        }
    }

    async getByName(product_name: string): Promise<object> {

        try {
            const product = await this.productModel.find({ "product_name": product_name })
            return product
        } catch (error) {
            throw new Error("Error while searching for the product in the database");
        }
    }
}
