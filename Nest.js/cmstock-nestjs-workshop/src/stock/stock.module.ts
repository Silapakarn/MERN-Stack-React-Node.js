import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { StockController } from './stock.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository])],
  controllers: [StockController],
})
export class StockModule {}
