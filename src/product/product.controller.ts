import { Controller, Get, HttpException, HttpStatus, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {

    constructor(private readonly productService:ProductService){}

    @Post()
    async createUser(@Body() prodToCreate: CreateProductDTO) : Promise<{}>{
        const product = await this.productService.createProduct(prodToCreate);

        return product
        
    }

    @Get('all')
    public async getProducts(): Promise<Product[]> {
        const products = await this.productService.getProducts();
        return products;
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN);
    }

    @Get(':id')
    public async getById(@Param('id') id: string): Promise<{}> {
        const products = await this.productService.getProduct(+id);
        return products;
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.productService.deleteProduct(+id);
    }
}
