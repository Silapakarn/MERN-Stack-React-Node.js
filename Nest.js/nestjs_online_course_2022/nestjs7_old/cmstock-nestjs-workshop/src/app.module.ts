import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './stock/stock.module';
import { typeOrmConfig } from "./config/typeorm.config";
import { MulterModule } from '@nestjs/platform-express/multer';
@Module({
  imports: [
    StockModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    MulterModule.register({
      dest: '/upldoad',
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
