import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";
import { Base, BaseEntitySchema } from "@/server/api/entities/base.entity";
import { Plano, PlanoEntitySchema } from "@/server/api/entities/plano.entity";
import { Topicos, TopicosEntitySchema } from "@/server/api/entities/topicos.entity";

export class Trilhas extends Base {
  title!: string;
  minLevel!: string;
  plano!: Plano;
  topicos!: Topicos[];
}

export const TrilhasEntitySchema = new EntitySchema<Trilhas>({
  name: "Trilhas",
  target: Trilhas, 
  columns: {
    ...BaseEntitySchema.options.columns,
    title: { type: String },
    minLevel: { type: String },
  },
  relations: {
    plano: {
      type: "many-to-one",
      target: () => Plano, 
      joinColumn: true,
    } as EntitySchemaRelationOptions,
    topicos: {
      type: "one-to-many",
      target: () => Topicos,
      inverseSide: "trilhas",
      joinColumn: true,
    } as EntitySchemaRelationOptions,
  },
});
