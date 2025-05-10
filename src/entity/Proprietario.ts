import 'reflect-metadata';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Proprietario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string

    @Column()
    foto!: string
  
}
