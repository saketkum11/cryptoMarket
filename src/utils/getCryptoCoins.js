import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
const apiUrl = "https://api.coingecko.com/api/v3";

const API_KEY = process.env.COIN_API_KEY;
let fakeUrl = 0;
const getCryptoCoin = async (coinId) => {
  const headers = API_KEY ? { "x-cg-demo-api-key": API_KEY } : {};
  try {
    const data = await axios.get(`${apiUrl}/coins/${coinId}`, {
      headers: headers,
    });
    return data.data.market_data;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
export { getCryptoCoin };
