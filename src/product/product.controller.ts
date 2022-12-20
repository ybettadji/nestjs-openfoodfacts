import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Get('getByCode/:code')
    getByCode(@Param('code') code: string): Promise<object> {
        return this.productService.getByCode(code)
    }
}
