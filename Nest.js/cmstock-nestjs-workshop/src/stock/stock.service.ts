import { CreateStockDto } from './dto/create-stock-sto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';

@Injectable()
export class StockService {
    constructor(@InjectRepository(ProductRepository) private productRepository: ProductRepository) { }

    createProduct(createStockDto: CreateStockDto) {
        return this.productRepository.createProduct(createStockDto)
    }

    getProducts() {
        return this.productRepository.find()
    } 

    async deleteProduct(id: number) {
        const result = await this.productRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Task with ID "${id} not found`);
        }
        return result
    }
}
