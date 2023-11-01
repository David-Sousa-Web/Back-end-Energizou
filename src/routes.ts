import { Router } from "express";
import { CreateCompanyController } from "./controllers/create-company-controller";
import { GetCompanyController } from "./controllers/get-company-controller";
import { UpdateCompanyController } from "./controllers/uptade-company-controller";
import { DeleteCompanyController } from "./controllers/delete-company-controller";

const routes = Router();

routes.post("/company", new CreateCompanyController().CreateCompany);
routes.get("/company", new GetCompanyController().GetCompany);
routes.put("/company/:id", new UpdateCompanyController().UpdateCompany);
routes.delete("/company/:id", new DeleteCompanyController().DeleteCompany);

export default routes;
