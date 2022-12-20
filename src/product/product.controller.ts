import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Get('getByCode/:code')
    @ApiOperation({ summary: "Search in the database a product with its code" })
    @ApiOkResponse({ description: "The product is returned. If there is no product is attached to the code entered, an empty object is returned" })
    getByCode(@Param('code') code: string): Promise<object> {
        return this.productService.getByCode(code)
    }
}
