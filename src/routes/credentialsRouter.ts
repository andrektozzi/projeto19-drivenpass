import { Router } from "express";
import { createCredential } from "../controllers/credentialsController.js";
import { credentialValidator } from "../middlewares/credentialMiddleware.js";
//import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const credentialsRouter = Router();

credentialsRouter.post("/credentials", credentialValidator, createCredential);

export default credentialsRouter;