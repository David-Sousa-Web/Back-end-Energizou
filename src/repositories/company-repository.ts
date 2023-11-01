import { AppDataSource } from "../db/data-source";
import { Company } from "../entities/company";

export const companyRepository = AppDataSource.getRepository(Company);
