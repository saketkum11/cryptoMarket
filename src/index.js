import { connectionToDataBase } from "./db/db.js";
import { app } from "./app.js";
import dotenv from "dotenv"
dotenv.config({path:"./.env"})
connectionToDataBase()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server Started ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Mongo db Connection Failed:", error);
  });
