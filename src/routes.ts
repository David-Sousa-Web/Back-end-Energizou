import { Router } from "express";
import { CompanyController } from "./controllers/company-controller";

const routes = Router();

routes.post("/company", new CompanyController().CreateCompany);

export default routes;
