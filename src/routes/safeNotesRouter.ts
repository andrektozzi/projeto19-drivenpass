import { Router } from "express";
import { createNote, fetchNotes, fetchOneNote, deleteNotes } from "../controllers/safeNotesController.js";
import { middleware } from "../middlewares/schemasValidationMiddleware.js";
import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const safeNotesRouter = Router();

safeNotesRouter.post("/safenotes", tokenValidator, middleware, createNote);
safeNotesRouter.get("/safenotes", tokenValidator, fetchNotes);
safeNotesRouter.get("/safenotes/:id", tokenValidator, fetchOneNote);
safeNotesRouter.delete("/safenotes/:id", tokenValidator, deleteNotes);

export default safeNotesRouter;