import { EntitySchema } from "typeorm";

export abstract class Base {
  id!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

export const BaseEntitySchema = new EntitySchema<Base>({
  name: "Base",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    createdAt: {
      type: Date,
      createDate: true,
    },
    updatedAt: {
      type: Date,
      updateDate: true,
    },
  },
});
