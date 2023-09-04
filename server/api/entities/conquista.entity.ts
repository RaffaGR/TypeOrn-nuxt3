import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";
import { Base, BaseEntitySchema } from "@/server/api/entities/base.entity";
import { Usuario } from "@/server/api/entities/usuario.entity";

export class Conquista extends Base {
  name!: string;
  usuario!: Usuario;
}

export const ConquistaEntitySchema = new EntitySchema<Conquista>({
  name: "Conquista",
  target: Conquista,
  columns: {
    ...BaseEntitySchema.options.columns,
    name: { type: String }
  },
  relations: {
    usuario: {
      type: "many-to-one",
      target: () => Usuario,
      joinColumn: true,
    } as EntitySchemaRelationOptions,
  },
});
