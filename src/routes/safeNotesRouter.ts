import { Router } from "express";
import { createNote, fetchNotes, fetchOneNote, deleteNotes } from "../controllers/safeNotesController.js";
import { noteValidator } from "../middlewares/noteMiddlaware.js";
//import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const safeNotesRouter = Router();

safeNotesRouter.post("/safenotes", noteValidator, createNote);
safeNotesRouter.get("/safenotes", fetchNotes);
safeNotesRouter.get("/safenotes/:id", fetchOneNote);
safeNotesRouter.delete("/safenotes/:id", deleteNotes);

export default safeNotesRouter;