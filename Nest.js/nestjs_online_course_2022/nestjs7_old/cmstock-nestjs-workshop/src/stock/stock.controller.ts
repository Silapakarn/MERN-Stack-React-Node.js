import { StockService } from './stock.service';
import { ProductRepository } from './product.repository';
import { Product } from './product.entity';
import { ChangeStringCasePipe } from './../pipes/change-string-case.pipe';
import { CreateStockDto } from './dto/create-stock-dto';
import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param, Delete, Patch, Put, HttpException, HttpStatus, NotFoundException, UseInterceptors, UploadedFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from "multer";
import * as fsExtra from 'fs-extra'
import { extname } from 'path';

@Controller('stock')
export class StockController {

    constructor(private stockService: StockService) {

    }

    @Get()
    getStocks() {
        return this.stockService.getProducts()
    }

    // @Post()
    // addStock(@Body('name') name:string, @Body('price') price:number){

    //     console.log(`${name}, ${price}`)
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // @UsePipes(new ChangeStringCasePipe())
    // addStock(@Body() createStockDto: CreateStockDto) {
    //     return this.stockService.createProduct(createStockDto)
    // }


    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './upload',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                return cb(null, `${randomName}${extname(file.originalname)}`)
            }
        })
    }))

    // @UseInterceptors(FileInterceptor('file'))
    @UsePipes(ValidationPipe)
    @UsePipes(new ChangeStringCasePipe())
    async addStock(@UploadedFile() file, @Body() createStockDto: CreateStockDto) {

        const product = await this.stockService.createProduct(createStockDto)

        const imageFile = product.id + extname(file.filename)
        fsExtra.move(file.path, `upload/${imageFile}`)
        product.image = imageFile
        await product.save()

        return product
    }



    @Get('/:id')
    getStockById(@Param('id') id: number) {
        return `Get Id is ${id}`
    }

    @Delete('/:id')
    DeleteStockById(@Param('id') id: number) {        
        return this.stockService.deleteProduct(id)        
    }

    @Put('/:id')
    UpdateStockById(@Param('id') id: number, @Body() createStockDto: CreateStockDto) {
        const { name, price, stock } = createStockDto
        console.log(`${name}, ${price}, ${stock}`)

        return `Update Id is ${id},  ${name}, ${price}, ${stock}`
    }

}
