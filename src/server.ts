import express from "express";
import { env } from "./env";
import { AppDataSource } from "./db/data-source";
import routes from "./routes";
import cors from "cors";

AppDataSource.initialize().then(() => {
  const port = env.PORT;

  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use(routes);

  return app.listen(port, () => console.log(`running on port ${port}! 🚀`));
});
