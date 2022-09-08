import { Response, Request, NextFunction } from "express";
import wifiSchema from "../schemas/wifiSchema.js";

export async function wifiValidator(req : Request,res: Response, next: NextFunction){
    const {error} = wifiSchema.validate(req.body, { abortEarly: false});
    if (error){
        return res.status(422).send(error.details);
    }
    next();
}