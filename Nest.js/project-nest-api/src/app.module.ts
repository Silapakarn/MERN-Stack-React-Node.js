import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CategoriesModule } from './categories/categories.module';
import { CoffeeModule } from './coffee/coffee.module';
import { AttributeModule } from './attribute/attribute.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test_nest',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),
  UsersModule,
  CategoriesModule,
  CoffeeModule,
  AttributeModule
],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {
  constructor(private connection: Connection) {}
}

