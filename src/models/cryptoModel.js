import mongoose, { Schema } from "mongoose";

const cryptoSchema = new Schema(
  {
    coin: {
      type: String,
      require: true,
      enum: ["bitcoin", "matic-network", "ethereum"],
    },
    currentPrice: {
      type: Number,
      require: true,
    },
    marketCap: {
      type: Number,
      require: true,
    },
    change24h: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);
export const Crypto = mongoose.model("Crypto",cryptoSchema);
