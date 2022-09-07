import { Router } from "express";

import authRouter from "../routes/authRouter.js"
import credentialsRouter from "./credentialsRouter.js";
import safeNotesRouter from "./safeNotesRouter.js";

const router = Router();
router.use(authRouter);
router.use(credentialsRouter);
router.use(safeNotesRouter);

export default router;