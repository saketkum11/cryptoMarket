import express from "express";
import dotenv from "dotenv";
import { backGroundJob } from "./utils/fetchCoins.js";
dotenv.config({ path: "./.env" });
const app = express();
const PORT = 3000 || process.env.PORT

dotenv.config({
  path: "./.env",
});
backGroundJob()
import statsRouter from "./routes/statsRouter.js"
import devationRouter from "./routes/devationRouter.js";
app.use("/stats",statsRouter)
app.use("/deviation",devationRouter)
app.listen(PORT);
export { app };
