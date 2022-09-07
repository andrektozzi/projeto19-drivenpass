import { Router } from "express";
import { createNote, fetchNotes } from "../controllers/safeNotesController.js";
import { noteValidator } from "../middlewares/noteMiddlaware.js";
//import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const safeNotesRouter = Router();

safeNotesRouter.post("/safenotes", noteValidator, createNote);
safeNotesRouter.get("/safenotes", fetchNotes);

export default safeNotesRouter;