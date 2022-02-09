import axios from "axios";
import Currency from "../models/Currency";
import {
  COINMARKET_API_KEY,
  COINMARKET_API_URL,
  COINMARKET_TOTAL_CURRENCIES
} from "../config";
import logger from "../core/logger";

class CoinMarketCap {
  public static async getTheLatestCurrencies(): Promise<any[]> {
    let bitcoin_api_url =
      COINMARKET_API_URL +
      "cryptocurrency/listings/latest?limit=" +
      COINMARKET_TOTAL_CURRENCIES;
    let result: Currency[] = [];
    try {
      let {
        data: { data }
      } = await axios.get(bitcoin_api_url, {
        headers: {
          "X-CMC_PRO_API_KEY": COINMARKET_API_KEY
        }
      });

      result = data.map((c: any) => {
        return new Currency(
          c.id,
          c.name,
          c.symbol,
          c.total_supply,
          c.last_updated
        );
      });
    } catch (error: any) {
      logger.error(error);
    }

    return result;
  }
}

export default CoinMarketCap;
