import { Router } from "express";
import { CreateCompanyController } from "./controllers/create-company-controller";

const routes = Router();

routes.post("/company", new CreateCompanyController().CreateCompany);

export default routes;
