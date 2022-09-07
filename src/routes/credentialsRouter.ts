import { Router } from "express";
import { createCredential, fetchCredentials, fetchOneCredential, deleteCredentials } from "../controllers/credentialsController.js";
import { middleware } from "../middlewares/schemasValidationMiddleware.js";
import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const credentialsRouter = Router();

credentialsRouter.post("/credentials", tokenValidator, middleware, createCredential);
credentialsRouter.get("/credentials", tokenValidator, fetchCredentials);
credentialsRouter.get("/credentials/:id", tokenValidator, fetchOneCredential);
credentialsRouter.delete("/credentials/:id", tokenValidator, deleteCredentials);

export default credentialsRouter;