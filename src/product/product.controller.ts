import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';

@ApiTags('Product Module')
@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Get('getByCode/:code')
    @ApiOperation({ summary: "Search in the database a product with its code" })
    @ApiOkResponse({ description: "The product is returned. If there is no product is attached to the code entered, an empty object is returned" })
    getByCode(@Param('code') code: string): Promise<object> {
        return this.productService.getByCode(code)
    }

    @Get('getByName/:product_name')
    @ApiOperation({ summary: "Search in the database a product with its name" })
    @ApiOkResponse({ description: "The product is returned. If there is no product is attached to the name entered, an empty object is returned" })
    getByName(@Param('product_name') product_name: string): Promise<object> {
        return this.productService.getByName(product_name)
    }
}
