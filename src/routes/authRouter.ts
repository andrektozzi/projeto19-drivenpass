import { Router } from "express";
import { createUser, signIn } from "../controllers/authController.js";
import { middleware } from "../middlewares/schemasValidationMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", middleware, createUser);
authRouter.post("/signin", middleware, signIn);

export default authRouter;
