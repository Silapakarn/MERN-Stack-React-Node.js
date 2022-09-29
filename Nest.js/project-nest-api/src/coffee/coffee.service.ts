import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private coffeeRepository: Repository<Coffee>,
  ) {}

  create(createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeRepository.save(createCoffeeDto);
  }

  findAll(): Promise<Coffee[]> {
    return this.coffeeRepository.find();
  }


  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeRepository.update(id, updateCoffeeDto);
  }

  async remove(id: string): Promise<void> {
    await this.coffeeRepository.delete(id);
  }
}
