import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";
import { Base, BaseEntitySchema } from "@/server/api/entities/base.entity";
import { Ferramentas, FerramentasEntitySchema } from "@/server/api/entities/ferramentas.entity";
import { Plano, PlanoEntitySchema } from "@/server/api/entities/plano.entity";

export class PlanoToFerramenta extends Base {
  plano!: Plano;
  ferramentas!: Ferramentas;
}

export const PlanoToFerramentaEntitySchema = new EntitySchema<PlanoToFerramenta>({
  name: "PlanoToFerramenta",
  target: PlanoToFerramenta, 
  columns: {...BaseEntitySchema.options.columns,}, 
  relations: {
    plano: {
      type: "many-to-one",
      target: () => Plano,
      joinColumn: true,
    } as EntitySchemaRelationOptions,
    ferramentas: {
      type: "many-to-one",
      target: () => Ferramentas, 
      joinColumn: true,
    } as EntitySchemaRelationOptions,
  },
});
