import { Router } from "express";

import authRouter from "../routes/authRouter.js"
import credentialsRouter from "./credentialsRouter.js";

const router = Router();
router.use(authRouter);
router.use(credentialsRouter);

export default router;