import 'reflect-metadata';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Horario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    inicioPeriodo!: Date

    @Column()
    fimPeriodo!: Date

    @Column()
    disponivel!: boolean
  
}
