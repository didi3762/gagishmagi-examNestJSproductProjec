import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.entity';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
      database: 'NotesDB',
      entities: [Product],
      synchronize: true,
    }),
    ProductModule],
  controllers: [AppController,ProductController],
  providers: [AppService,ProductService],
})
export class AppModule {}
