import { Module } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { AttributeController } from './attribute.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { attribute } from './entities/attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([attribute])],
  controllers: [AttributeController],
  providers: [AttributeService],
})
export class AttributeModule {}
