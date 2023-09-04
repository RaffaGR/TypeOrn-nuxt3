import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";
import { Base, BaseEntitySchema } from "@/server/api/entities/base.entity";
import { Materia, MateriaEntitySchema } from "@/server/api/entities/materia.entity";
import { Trilhas, TrilhasEntitySchema } from "@/server/api/entities/trilhas.entity";

export class Topicos extends Base {
  title!: string;
  trilhas!: Trilhas;
  materia!: Materia[];
}

export const TopicosEntitySchema = new EntitySchema<Topicos>({
  name: "Topicos",
  target: Topicos,
  columns: {
    ...BaseEntitySchema.options.columns,
    title: { type: String },
  },
  relations: {
    trilhas: {
      type: "many-to-one",
      target: () => Trilhas,
      joinColumn: true,
    } as EntitySchemaRelationOptions,
    materia: {
      type: "one-to-many",
      target: () => Materia, 
      inverseSide: "topicos",
      joinColumn: true,
    } as EntitySchemaRelationOptions,
  },
});
