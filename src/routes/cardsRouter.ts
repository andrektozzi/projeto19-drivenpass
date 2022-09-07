import { Router } from "express";
import { createCard } from "../controllers/cardsController.js";
import { middleware } from "../middlewares/schemasValidationMiddleware.js";
import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const cardsRouter = Router();

cardsRouter.post("/cards", tokenValidator, middleware, createCard);

export default cardsRouter;