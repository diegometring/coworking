import { DataSource } from "typeorm"
import { Usuario } from "./entity/Usuario"
import { Empresa } from "./entity/Empresa"
import { Horario } from "./entity/Horario"
import { Predio } from "./entity/Predio"
import { Proprietario } from "./entity/Proprietario"
import { Sala } from "./entity/Sala"

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Empresa, Horario, Predio, Proprietario, Sala, Usuario],
    subscribers: [],
    migrations: [],
})