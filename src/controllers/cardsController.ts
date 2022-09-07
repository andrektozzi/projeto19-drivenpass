import { Request, Response } from "express";
import * as cardService from "../services/cardService.js"

export async function createCard(req: Request, res: Response){
    const {title, number, name, CVV, password, ExpirationDate, isVirtual, type} = req.body;
    const userId:number = res.locals.userId;
    await cardService.createCard({userId,title,number, name, CVV, password,ExpirationDate,isVirtual,type});
    res.sendStatus(201);
}