import 'reflect-metadata';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string

    @Column()
    email!: string

    @Column()
    senha!: string

    @Column()
    cpf!: string

    @Column()
    funcao!: string

    @Column()
    telefone!: number 
    

}
