import { z } from "zod";
import { Crypto } from "../models/cryptoModel.js";
import { calculateDevaition } from "../utils/calculateDevation.js";
const queryName = z.string({ message: "must be string" });
const stats = async (req, res) => {
  try {
    const { coin } = req.query;
    const validateQuery = queryName.safeParse(coin);
    if (!validateQuery.success) {
      return res.status(403).json({ message: "query must be string" });
    }
    const coinData = await Crypto.find({ coin: coin }).sort({ createdAt: -1 });
    return res.status(200).json({ message: "fetched data", data: coinData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const devation = async (req, res) => {
  try {
    const { coin } = req.query;
    console.log(coin);
    const validateQuery = queryName.safeParse(coin);
    if (!validateQuery.success) {
      return res.status(403).json({ message: "query must be string" });
    }
    const findCoin = await Crypto.find({ coin: coin });
    const deviation = calculateDevaition(findCoin);
    return res
      .status(200)
      .json({ message: "Standard deviation data", deviation: deviation });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { stats, devation };
