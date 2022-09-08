import { Router } from "express";
import { createCard, fetchCards, fetchOneCard, deleteCard } from "../controllers/cardsController.js";
import { cardValidator } from "../middlewares/cardMiddleware.js";
import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const cardsRouter = Router();

cardsRouter.post("/cards", tokenValidator, cardValidator, createCard);
cardsRouter.get("/cards", tokenValidator, fetchCards);
cardsRouter.get("/cards/:id", tokenValidator, fetchOneCard);
cardsRouter.delete("/cards/:id", tokenValidator, deleteCard);

export default cardsRouter;