import 'reflect-metadata';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sala {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nomeSala!: string

    @Column()
    capacidade!: string

    @Column()
    categoria!: string

    @Column()
    disponibilidade!: boolean

}
