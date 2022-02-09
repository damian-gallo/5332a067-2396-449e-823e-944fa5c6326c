import { Request, Response, NextFunction } from "express";
import logger from "../core/logger";

async function cache(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  if (Date.now() - req.app.locals[req.path]?.timestamp < 60000) {
    logger.info(`Using cache for '${req.path}' request`);
    res.set("cached-timestamp", req.app.locals[req.path]?.timestamp);
    return res.json(req.app.locals[req.path]?.response);
  }

  next();
}

export default cache;
