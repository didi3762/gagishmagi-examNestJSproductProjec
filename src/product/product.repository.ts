import { Repository, EntityRepository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    public async createProduct(
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
        const { } = createProductDto;

        const product = new Product();
        product.name = createProductDto.name;
        product.description = createProductDto.description;
        product.price = createProductDto.price;

        await this.save(product);
        return product;
    }

    public async getall(): Promise<Product[]> {
        return await this.find()
    }

    public async getById(productId){
        return await  this.findOne({id: productId})
    }


    public async editProduct(
        createProductDto: CreateProductDTO,
        id:number
    ): Promise<Product> {

        const product = new Product();
        product.name = createProductDto.name;
        product.description = createProductDto.description;
        product.price = createProductDto.price;

        await this.update(id,product);

        return product;
    }

    public async deleteProduct(productId: number): Promise<void> {
        await this.delete(productId)
    }
}
