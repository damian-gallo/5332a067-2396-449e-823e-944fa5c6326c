import { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import criptos from "../routes/criptos";
import ping from "../routes/ping";
import error from "../middleware/error";

export const initializeRoutes = (app: Application) => {
  app.use(helmet());
  app.use(cors());
  app.use(compression());

  app.use("/criptos", criptos);
  app.use("/ping", ping);

  app.use(error);
};
