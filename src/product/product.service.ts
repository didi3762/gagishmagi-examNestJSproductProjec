import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private readonly productRepository: ProductRepository
    ) { 

    }

    example = {"description": "sample description", "name": "sample name", "price": "sample price"}

    public async createProduct(
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
        return await this.productRepository.createProduct(createProductDto) //create product
    }


    public async getProducts(): Promise<Product[]> {
        return await this.productRepository.find()
    }


    public async getProduct(productId: number): Promise<Product> {
        const foundProduct = this.productRepository.findOne(productId)
        if (!foundProduct) {
            throw new NotFoundException('Product not found');
        }
        return foundProduct;
    }


    public async editProduct(
        productId: number,
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
        //find One and Edit
        const editedProduct = null; //find One
        if (!editedProduct) {
            throw new NotFoundException('Product not found');
        }
        return null ; // Edit Product
    }


    public async deleteProduct(productId: number): Promise<void> {
        await this.productRepository.delete(productId)
    }
}
