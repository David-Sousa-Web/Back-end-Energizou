import { DataSource } from "typeorm";
import "reflect-metadata";
import { env } from "../env";
import { Company } from "../entities/company";
import { default1698814938363 } from "../migrations/1698814938363-default";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  entities: [Company],
  migrations: [default1698814938363],
});
