import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";
import { Base, BaseEntitySchema } from "@/server/api/entities/base.entity";
import { Ferramentas, FerramentasEntitySchema } from "@/server/api/entities/ferramentas.entity";

export class Pedido extends Base {
  date!: Date;
  title!: string;
  description!: string;
  client!: string;
  amount!: number;
  price!: number;
  status!: string;
  ferramentas!: Ferramentas;
}

export const PedidoEntitySchema = new EntitySchema<Pedido>({
  name: "Pedido",
  target: Pedido,
  columns: {
    ...BaseEntitySchema.options.columns,
    date: { type: Date },
    title: { type: String },
    description: { type: String },
    client: { type: String },
    amount: { type: Number },
    price: { type: Number },
    status: { type: String },
  },
  relations: {
    ferramentas: {
      type: "many-to-one",
      target: () => Ferramentas,
      joinColumn: true,
    } as EntitySchemaRelationOptions,
  },
});
