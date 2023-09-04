import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";
import { Base, BaseEntitySchema } from "@/server/api/entities/base.entity";
import { Precificacao, PrecificacaoEntitySchema } from "@/server/api/entities/precificacao.entity";
import { Pedido, PedidoEntitySchema } from "@/server/api/entities/pedido.entity";
import { PlanoToFerramenta, PlanoToFerramentaEntitySchema } from "@/server/api/entities/planoToFerramenta.entity";

export class Ferramentas extends Base {
  toolName!: string;
  precificacao!: Precificacao[];
  pedido!: Pedido[];
  planoToFerramentas!: PlanoToFerramenta[];
}

export const FerramentasEntitySchema = new EntitySchema<Ferramentas>({
  name: "Ferramentas",
  target: Ferramentas, // Indicando a própria entidade como alvo
  columns: {
    ...BaseEntitySchema.options.columns,
    toolName: { type: String },
  },
  relations: {
    precificacao: {
      type: "one-to-many",
      target: () => Precificacao, 
      inverseSide: "ferramentas",
      joinColumn: true,
    } as EntitySchemaRelationOptions,
    pedido: {
      type: "one-to-many",
      target: () => Pedido, 
      inverseSide: "ferramentas",
      joinColumn: true,
    } as EntitySchemaRelationOptions,
    planoToFerramentas: {
      type: "one-to-many",
      target: () => PlanoToFerramenta,      
      inverseSide: "ferramentas",
      joinColumn: true,
    } as EntitySchemaRelationOptions,
  },
});
