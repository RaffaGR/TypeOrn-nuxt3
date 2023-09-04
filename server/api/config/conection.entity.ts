import { ConquistaEntitySchema } from "@/server/api/entities/conquista.entity"
import { ConteudoEntitySchema } from "@/server/api/entities/conteudo.entity"
import { ExercicioEntitySchema } from "@/server/api/entities/exercicio.entity"
import { FerramentasEntitySchema } from "@/server/api/entities/ferramentas.entity"
import { MateriaEntitySchema } from "@/server/api/entities/materia.entity"
import { PedidoEntitySchema } from "@/server/api/entities/pedido.entity"
import { PlanoEntitySchema } from "@/server/api/entities/plano.entity"
import { PlanoToFerramentaEntitySchema } from "@/server/api/entities/planoToFerramenta.entity"
import { PrecificacaoEntitySchema } from "@/server/api/entities/precificacao.entity"
import { TopicosEntitySchema } from "@/server/api/entities/topicos.entity"
import { TrilhasEntitySchema } from "@/server/api/entities/trilhas.entity"
import { UsuarioEntitySchema } from "@/server/api/entities/usuario.entity"
import { DataSource } from "typeorm";

const entities = [PlanoEntitySchema, UsuarioEntitySchema, ConquistaEntitySchema, ConteudoEntitySchema, ExercicioEntitySchema, MateriaEntitySchema, FerramentasEntitySchema, PedidoEntitySchema, PlanoToFerramentaEntitySchema, PrecificacaoEntitySchema, TopicosEntitySchema, TrilhasEntitySchema]

export const AppDataSource = new DataSource({
  type: "mysql",
  /* host: process.env.DB_HOST,
  port: porta,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME, */
  host: "localhost",
  port: 3306,
  username: "",
  password: "",
  database: "",
  synchronize: true, 
  entities,
});


export const Conecting = AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!: Sucess")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization: Fail", err)
})                                      ?