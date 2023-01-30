import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChangeStrCasePipe } from 'src/pipes/change-str-case/change-str-case.pipe';
import { CreateStockDto } from './dto/create-stock-sto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Controller('stock')
export class StockController {

    // constructor(@InjectRepository(ProductRepository) private productRepository:ProductRepository){}
    constructor(@InjectRepository(ProductRepository) private productRepository:ProductRepository){   
    }

    @Get()
    getStock(){
        // return [1,2,3]
        return this.productRepository.find()
    }

    // @Post()
    // addStock(@Body('name') name:string, @Body('price') price:number){
    //     console.log(`name: ${name} price: ${price}`)
    // }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new ChangeStrCasePipe())
    addStock(@Body() createStockDto: CreateStockDto){
        const { name,price, stock} = createStockDto
        console.log(`name: ${name} price: ${price} stock: ${stock}`)

        const product = new Product()
        product.name = name
        product.price = price
        product.stock = stock
        product.save()

    }

    @Get('/:id')
    getStockById(@Param('id') id:number){
        return `Id is ${id}`
    }

    @Delete('/:id')
    DeleteStockById(@Param('id') id:number){
        return `delete stock by ID: ${id}`
    }

    @Put('/:id')
    UpdateStockById(@Param('id') id:number, @Body() createStockDto: CreateStockDto){
        const { name,price, stock} = createStockDto
        console.log(`name: ${name} price: ${price} stock: ${stock}`)

        return `name: ${name} price: ${price} stock: ${stock} update stock by ID: ${id}`
    }
}
