import { Router } from "express";
import { createWifi } from "../controllers/wifiController.js";
import { tokenValidator } from "../middlewares/tokenMiddleware.js";
import { wifiValidator } from "../middlewares/wifiMiddleware.js";

const wifiRouter = Router();

wifiRouter.post("/wifi", tokenValidator, wifiValidator, createWifi);

export default wifiRouter;