import { EntitySchema, EntitySchemaRelationOptions } from "typeorm";
import { Base, BaseEntitySchema } from "@/server/api/entities/base.entity";
import { Conquista, ConquistaEntitySchema } from "@/server/api/entities/conquista.entity";
import { Plano, PlanoEntitySchema } from "@/server/api/entities/plano.entity";

export class Usuario extends Base {
  email?: string;
  password?: string;
  cpf?: string;
  cnpj?: string;
  first_name?: string;
  last_name?: string;
  address?: string;
  phone?: string;
  city?: string;
  district?: string;
  cep?: string;
  level?: number;

  plano?: Plano;
  conquistas?: Conquista[];
}

export const UsuarioEntitySchema = new EntitySchema<Usuario>({
  name: "Usuario",
  target: Usuario, 
  columns: {
    ...BaseEntitySchema.options.columns,
    email: { type: String, nullable: true },
    password: { type: String, nullable: true },
    cpf: { type: String, nullable: true },
    cnpj: { type: String, nullable: true },
    first_name: { type: String, nullable: true },
    last_name: { type: String, nullable: true },
    address: { type: String, nullable: true },
    phone: { type: String, nullable: true },
    city: { type: String, nullable: true },
    district: { type: String, nullable: true },
    cep: { type: String, nullable: true },
    level: { type: Number, nullable: true },
  },
  relations: {
    plano: {
      type: "many-to-one",
      target: () => Plano, 
      joinColumn: true,
      nullable: true,
    } as EntitySchemaRelationOptions,
    conquistas: {
      type: "one-to-many",
      target: () => Conquista, 
      inverseSide: "usuario",
      joinColumn: true,
      nullable: true,
    } as EntitySchemaRelationOptions,
  },
});
