import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";
import { Base, BaseEntitySchema } from "@/server/api/entities/base.entity";
import { Materia, MateriaEntitySchema } from "@/server/api/entities/materia.entity";

export class Exercicio extends Base {
  pagTitle!: string;
  pagSubtitle!: string;
  txt1!: string;
  txt2!: string;
  txt3!: string;
  txt4!: string;
  concluidDate!: Date;
  concluid!: boolean;
  chosenAnswer!: string;
  materia!: Materia;
}

export const ExercicioEntitySchema = new EntitySchema<Exercicio>({
  name: "Exercicio",
  target: Exercicio, 
  columns: {
    ...BaseEntitySchema.options.columns,
    pagTitle: { type: String },
    pagSubtitle: { type: String },
    txt1: { type: String },
    txt2: { type: String },
    txt3: { type: String },
    txt4: { type: String },
    concluidDate: { type: Date },
    concluid: { type: Boolean },
    chosenAnswer: { type: String },
  },
  relations: {
    materia: {
      type: "many-to-one",
      target: () => Materia, 
      joinColumn: true,
    } as EntitySchemaRelationOptions,
  },
});
