import express from "express";
import { env } from "./env";
import { AppDataSource } from "./db/data-source";

AppDataSource.initialize().then(() => {
  const port = env.PORT;

  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    return res.json("tudo certo");
  });

  return app.listen(port, () => console.log(`running on port ${port}! 🚀`));
});
