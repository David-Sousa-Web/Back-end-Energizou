import { Request, Response } from "express";
import { companyRepository } from "../repositories/company-repository";

export class GetCompanyCnpjController {
  async GetCompanyCNPJ(req: Request, res: Response) {
    const { CNPJ } = req.params;

    try {
      const company = await companyRepository.find({
        where: {
          CNPJ: String(CNPJ),
        },
      });

      if (company) {
        return res.json(company);
      } else {
        return res.status(404).json({ message: "Company not found." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error while retrieving Company." });
    }
  }
}
