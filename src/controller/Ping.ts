import { Request, Response } from "express";

class Ping {
  public static async ping(req: Request, res: Response): Promise<any> {
    res.send("pong");
  }
}

export default Ping;
