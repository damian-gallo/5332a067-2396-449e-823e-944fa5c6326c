import express from "express";
import logger from "./core/logger";
import { PORT } from "./config";
import { initializeRoutes } from "./startup/routes";

const app: any = express();

initializeRoutes(app);

app.listen(PORT, () => {
  logger.info(`Server listening in port ${PORT}...`);
});

export default app;
