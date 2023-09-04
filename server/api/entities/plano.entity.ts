import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";
import { Base, BaseEntitySchema } from "@/server/api/entities/base.entity";
import { PlanoToFerramenta, PlanoToFerramentaEntitySchema } from "@/server/api/entities/planoToFerramenta.entity";
import { Usuario, UsuarioEntitySchema } from "@/server/api/entities/usuario.entity";
import { Trilhas, TrilhasEntitySchema } from "@/server/api/entities/trilhas.entity";

export class Plano extends Base {
  name!: string;
  description!: string;
  duration!: number;
  price!: number;
  usuarios!: Usuario[];
  planoToFerramentas!: PlanoToFerramenta[];
  trilhas!: Trilhas[];
}

export const PlanoEntitySchema = new EntitySchema<Plano>({
  name: "Plano",
  target: Plano, 
  columns: {
    ...BaseEntitySchema.options.columns,
    name: { type: String },
    description: { type: String },
    duration: { type: Number },
    price: { type: Number },
  },
  relations: {
    usuarios: {
      type: "one-to-many",
      target: () => Usuario, 
      inverseSide: "plano",
      joinColumn: true,
    } as EntitySchemaRelationOptions,
    planoToFerramentas: {
      type: "one-to-many",
      target: () => PlanoToFerramenta, 
      inverseSide: "plano",
      joinColumn: true,
    } as EntitySchemaRelationOptions,
    trilhas: {
      type: "one-to-many",
      target: () => Trilhas, // Ou "Trilhas" se preferir
      inverseSide: "plano",
      joinColumn: true,
    } as EntitySchemaRelationOptions,
  },
});
