import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  price: number;

  @Column()
  duration: number;

  @Column()
  stock: number;

  @Column()
  sweetness: string;

  @Column({ default: true })
  option: boolean;
}
