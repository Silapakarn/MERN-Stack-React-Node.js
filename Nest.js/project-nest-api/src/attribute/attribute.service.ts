import { Injectable } from '@nestjs/common';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { attribute } from './entities/attribute.entity';

@Injectable()
export class AttributeService {
  constructor(
    @InjectRepository(attribute)
    private attributeRepository: Repository<attribute>,
  ) {}


  create(createAttributeDto: CreateAttributeDto) {
    return this.attributeRepository.save(createAttributeDto);
  }

  findAll(): Promise<attribute[]> {
    return this.attributeRepository.find();
  }


  update(id: number, updateAttributeDto: UpdateAttributeDto) {
    return this.attributeRepository.update(id, updateAttributeDto);
  }

  async remove(id: string): Promise<void> {
    await this.attributeRepository.delete(id);
  }
}
