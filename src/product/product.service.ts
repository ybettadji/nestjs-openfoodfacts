import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/core/entities/product.entities';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private productModel: Model<Product>) { }

    async getByCode(code: string): Promise<object> {
        const product = await this.productModel.find({ "code": code })
        return product
    }
}
