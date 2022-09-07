import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function tokenValidator(req:Request, res:Response, next: NextFunction){
    const token: string = req.headers.authorization.replace('Bearer ', '')
    const decryptedToken: any = jwt.decode(token)
    res.locals.userId = decryptedToken.id
    next()   
}