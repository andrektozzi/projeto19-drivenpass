import { Router } from "express";
import { createWifi, fetchWifis } from "../controllers/wifiController.js";
import { tokenValidator } from "../middlewares/tokenMiddleware.js";
import { wifiValidator } from "../middlewares/wifiMiddleware.js";

const wifiRouter = Router();

wifiRouter.post("/wifi", tokenValidator, wifiValidator, createWifi);
wifiRouter.get("/wifi", tokenValidator, fetchWifis);

export default wifiRouter;