import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: '',
  password: '',
  database: '',
  entities: ['./server/api/entities/*.ts'],
  logging: true,
  synchronize: false,
  migrationsRun: false,
  migrations: ['./server/api/migrations/*.ts'],
  migrationsTableName: 'history',
});