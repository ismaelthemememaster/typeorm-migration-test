/** @packages */
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from './database/entities/User';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "migrationTest",
  password: "migrationTest",
  database: "migrationTest",
  synchronize: false,
  logging: ["query", "error"],
  entities: [User],
  migrations: [__dirname + "/database/migrations/*{.js,.ts}"],
});
