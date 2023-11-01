import { Request, Response } from "express";
import { companyRepository } from "../repositories/company-repository";

export class DeleteCompanyController {
  async DeleteCompany(req: Request, res: Response) {
    const companyID = req.params.id;

    try {
      await companyRepository.delete({ Id: String(companyID) });

      return res.status(200).json({ message: "Delete Successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
