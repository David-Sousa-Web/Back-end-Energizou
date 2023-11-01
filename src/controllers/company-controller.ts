import { Request, Response } from "express";
import { z } from "zod";
import { hash } from "bcryptjs";
import { companyRepository } from "../repositories/company-repository";

export class CompanyController {
  async CreateCompany(req: Request, res: Response) {
    const companyBodySchema = z.object({
      NomedoCliente: z.string(),
      Senha: z.string().min(6),
      CNPJ: z.string(),
      CEP: z.string(),
      Endereco: z.string(),
      Numero: z.number(),
      Telefone: z.string(),
      Email: z.string().email(),
    });

    const {
      NomedoCliente,
      Senha,
      CNPJ,
      CEP,
      Endereco,
      Numero,
      Telefone,
      Email,
    } = companyBodySchema.parse(req.body);

    const companyExists = await companyRepository.findOne({ where: { CNPJ } });

    if (companyExists) {
      return res.status(400).json({ message: "Company already exists." });
    }

    const password_hash = await hash(Senha, 6);

    try {
      const newCompany = companyRepository.create({
        NomedoCliente,
        Senha: password_hash,
        CNPJ,
        CEP,
        Endereco,
        Numero,
        Telefone,
        Email,
      });

      await companyRepository.save(newCompany);

      return res
        .status(201)
        .json({ message: "Successfully created company", newCompany });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
