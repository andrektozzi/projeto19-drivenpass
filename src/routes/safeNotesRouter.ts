import { Router } from "express";
import { createNote } from "../controllers/safeNotesController.js";
import { noteValidator } from "../middlewares/noteMiddlaware.js";
//import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const safeNotesRouter = Router();

safeNotesRouter.post("/safenotes", noteValidator, createNote);

export default safeNotesRouter;