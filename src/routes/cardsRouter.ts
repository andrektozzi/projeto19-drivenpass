import { Router } from "express";
import { createCard, fetchCards, fetchOneCard } from "../controllers/cardsController.js";
import { middleware } from "../middlewares/schemasValidationMiddleware.js";
import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const cardsRouter = Router();

cardsRouter.post("/cards", tokenValidator, middleware, createCard);
cardsRouter.get("/cards", tokenValidator, fetchCards);
cardsRouter.get("/cards/:id", tokenValidator, fetchOneCard);

export default cardsRouter;