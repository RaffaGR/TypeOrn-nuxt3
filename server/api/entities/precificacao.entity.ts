import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";
import { Base, BaseEntitySchema } from "@/server/api/entities/base.entity";
import { Ferramentas, FerramentasEntitySchema } from "@/server/api/entities/ferramentas.entity";

export class Precificacao extends Base {
  material!: string;
  price!: number;
  amount!: number;
  totalPrice!: number;
  ferramentas!: Ferramentas;
}

export const PrecificacaoEntitySchema = new EntitySchema<Precificacao>({
  name: "Precificacao",
  target: Precificacao,
  columns: {
    ...BaseEntitySchema.options.columns,
    material: { type: String },
    price: { type: Number },
    amount: { type: Number },
    totalPrice: { type: Number },
  },
  relations: {
    ferramentas: {
      type: "many-to-one",
      target: () => Ferramentas, 
      joinColumn: true,
    } as EntitySchemaRelationOptions,
  },
});
