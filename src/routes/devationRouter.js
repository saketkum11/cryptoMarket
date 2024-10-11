import { Router } from "express";
import { devation } from "../controllers/statsController.js";
const router = Router();

router.get("/", devation);
export default router