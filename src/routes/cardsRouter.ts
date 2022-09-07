import { Router } from "express";
import { createCard, fetchCards } from "../controllers/cardsController.js";
import { middleware } from "../middlewares/schemasValidationMiddleware.js";
import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const cardsRouter = Router();

cardsRouter.post("/cards", tokenValidator, middleware, createCard);
cardsRouter.get("/cards", tokenValidator, fetchCards);

export default cardsRouter;