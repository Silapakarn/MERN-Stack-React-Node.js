import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class attribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  price: number;

  @Column()
  duration: number;

  @Column()
  idCoffee: number;

  @Column()
  idTea: number;

  @Column()
  idSoftDrink: number;
}
