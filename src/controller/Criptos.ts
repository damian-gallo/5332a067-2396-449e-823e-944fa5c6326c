import { Request, Response } from "express";
import CoinMarketCapService from "../services/CoinMarketCap";

class Criptos {
  public static async all(req: Request, res: Response): Promise<any> {
    const currencies = await CoinMarketCapService.getTheLatestCurrencies();
    const response = { total: currencies.length, currencies };

    //cache
    req.app.locals[req.path] = { timestamp: Date.now(), response };

    res.json(response);
  }
}

export default Criptos;
