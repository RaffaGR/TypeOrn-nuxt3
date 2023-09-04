import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";
import { Base, BaseEntitySchema } from "@/server/api/entities/base.entity";
import { Conteudo, ConteudoEntitySchema } from "@/server/api/entities/conteudo.entity";
import { Exercicio, ExercicioEntitySchema } from "@/server/api/entities/exercicio.entity";
import { Topicos, TopicosEntitySchema } from "@/server/api/entities/topicos.entity";

export class Materia extends Base {
  title!: string;
  description!: string;
  topicos!: Topicos;
  conteudo!: Conteudo[];
  exercicio!: Exercicio[];
}

export const MateriaEntitySchema = new EntitySchema<Materia>({
  name: "Materia",
  target: Materia, 
  columns: {
    ...BaseEntitySchema.options.columns,
    title: { type: String },
    description: { type: String },
  },
  relations: {
    topicos: {
      type: "many-to-one",
      target: () => Topicos,
      joinColumn: true,
    } as EntitySchemaRelationOptions,
    conteudo: {
      type: "one-to-many",
      target: () => Conteudo, 
      inverseSide: "materia",
      joinColumn: true,
    } as EntitySchemaRelationOptions,
    exercicio: {
      type: "one-to-many",
      target: () => Exercicio, 
      inverseSide: "materia",
      joinColumn: true,
    } as EntitySchemaRelationOptions,
  },
});
