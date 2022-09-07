import { Router } from "express";
import { createCredential, fetchCredentials } from "../controllers/credentialsController.js";
import { credentialValidator } from "../middlewares/credentialMiddleware.js";
//import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const credentialsRouter = Router();

credentialsRouter.post("/credentials", credentialValidator, createCredential);
credentialsRouter.get("/credentials", fetchCredentials);

export default credentialsRouter;