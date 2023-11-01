import { Request, Response } from "express";
import { companyRepository } from "../repositories/company-repository";

export class GetCompanyController {
  async GetCompany(req: Request, res: Response) {
    try {
      const company = await companyRepository.find();

      return res.json(company);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error while retrieving tasks." });
    }
  }
}
