import { Request, Response } from "express";
import { z } from "zod";
import { companyRepository } from "../repositories/company-repository";
import { hash } from "bcryptjs";

export class UpdateCompanyController {
  async UpdateCompany(req: Request, res: Response) {
    const companyBodySchema = z.object({
      NomedoCliente: z.string(),
      Senha: z.string().min(6),
      CEP: z.string(),
      Endereco: z.string(),
      Numero: z.number(),
      Telefone: z.string(),
      Email: z.string().email(),
    });

    const { NomedoCliente, Senha, CEP, Endereco, Numero, Telefone, Email } =
      companyBodySchema.parse(req.body);
    const companyID = req.params.id;

    const company = companyRepository.findOneBy({ Id: String(companyID) });

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    const password_hash = await hash(Senha, 6);

    try {
      await companyRepository.update(companyID, {
        NomedoCliente,
        Senha: password_hash,
        CEP,
        Endereco,
        Numero,
        Telefone,
        Email,
      });

      return res.status(201).json({ message: "Company update Successfully" });
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "internal server error" });
    }
  }
}
