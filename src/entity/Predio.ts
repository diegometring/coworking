import 'reflect-metadata';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Predio {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nomePredio!: string

    @Column()
    endereco!: string

    @Column()
    pontosDeDestaque!: string

    @Column()
    idProprietario!: string
    
}
