import { Router } from "express";
import { createCredential, fetchCredentials, fetchOneCredential } from "../controllers/credentialsController.js";
import { credentialValidator } from "../middlewares/credentialMiddleware.js";
//import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const credentialsRouter = Router();

credentialsRouter.post("/credentials", credentialValidator, createCredential);
credentialsRouter.get("/credentials", fetchCredentials);
credentialsRouter.get("/credentials/:id", fetchOneCredential);

export default credentialsRouter;