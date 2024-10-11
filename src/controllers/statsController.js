import { z } from "zod";
import { Crypto } from "../models/cryptoModel.js";
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
    return res.status(500).json({ message: "Internal Error" });
  }
};
const devation = async (req, res) => {
  try {
    const { coin } = req.query;
    const validateQuery = queryName.safeParse(coin);
    if (!validateQuery.success) {
      return res.status(403).json({ message: "query must be string" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Error" });
  }
};

export { stats, devation };
