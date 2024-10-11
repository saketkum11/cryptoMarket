import { Crypto } from "../models/cryptoModel.js";
import { getCryptoCoin } from "./getCryptoCoins.js";
import { scheduleJob } from "node-schedule";
const coins = ["bitcoin", "matic-network", "ethereum"];
const fetchCoins = async () => {
  for (let index = 0; index < coins.length; index++) {
    console.log("from coins ", coins[index]);
    try {
      const coinData = await getCryptoCoin(coins[index]);
      console.log("inside from fetchcoins",  coinData?.current_price.usd);
      
      await Crypto.create({
        coin: coins[index],
        currentPrice: coinData?.current_price.usd,
        marketCap:  coinData?.market_cap.usd,
        change24h: coinData?.price_change_percentage_24h,
      });
    
    } catch (error) {
      console.error(error);
    }
  }
};
const backGroundJob = () => {
  const jobs = scheduleJob("0 */2 * * *", fetchCoins);
  fetchCoins()
};
export { backGroundJob };
