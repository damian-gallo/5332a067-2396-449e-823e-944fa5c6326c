import { Request, Response, NextFunction } from "express";

async function error(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  res.status(500).send("Something went wrong...");
}

export default error;
