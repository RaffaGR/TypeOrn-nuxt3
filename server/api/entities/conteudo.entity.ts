import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";
import { Base, BaseEntitySchema } from "@/server/api/entities/base.entity";
import { Materia } from "@/server/api/entities/materia.entity";

export class Conteudo extends Base {
  pagTitle!: string;
  img!: string;
  txt1!: string;
  txt2!: string;
  txt3!: string;
  readDate!: Date;
  materia!: Materia;
}

export const ConteudoEntitySchema = new EntitySchema<Conteudo>({
  name: "Conteudo",
  target: Conteudo,
  columns: {
    ...BaseEntitySchema.options.columns,
    pagTitle: { type: String },
    img: { type: String },
    txt1: { type: String },
    txt2: { type: String },
    txt3: { type: String },
    readDate: { type: Date },
  },
  relations: {
    materia: {
      type: "many-to-one",
      target: () => Materia,
      joinColumn: true,
    } as EntitySchemaRelationOptions,
  },
});
