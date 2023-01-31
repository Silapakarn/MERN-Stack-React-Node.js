import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { ChangeStrCasePipe } from 'src/pipes/change-str-case/change-str-case.pipe';
import { fileURLToPath } from 'url';
import { CreateStockDto } from './dto/create-stock-sto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
import { StockService } from './stock.service';
import { diskStorage } from 'multer';
import * as fsExtra from 'fs-extra';
import { extname } from 'path';

@Controller('stock')
export class StockController {

    constructor(private stockService:StockService){

    }

    @Get()
    getStock(){
        return this.stockService.getProducts()
    }

    // @Post()
    // addStock(@Body('name') name:string, @Body('price') price:number){
    //     console.log(`name: ${name} price: ${price}`)
    // }
 
    // @Post() 
    // @UsePipes(ValidationPipe)
    // @UsePipes(new ChangeStrCasePipe())
    // addStock(@Body() createStockDto: CreateStockDto){
    //    return this.stockService.createProduct(createStockDto)
    // } 

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './upload',
            filename: (req, file, cd) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          return cb(null, `${randomName}${extname(file.oiginalname)}`);
            }
        })
    }))


    @Post() 
    @UsePipes(ValidationPipe)
    // @UseInterceptors(FileInterceptor('file'))
    @UsePipes(new ChangeStrCasePipe())
    async addStock(@UploadedFile() file, @Body() createStockDto: CreateStockDto){

        
        const product = await this.stockService.createProduct(createStockDto)

        const imageFile = product.id + extname(file.filename)
        fsExtra.move(file.path, `upload/${imageFile}`)
        product.image = imageFile
        await product.save()
        
        return product
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
function cb(arg0: null, arg1: string) {
    throw new Error('Function not implemented.');
}

