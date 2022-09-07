import { Request, Response } from "express";
import * as credentialService from "../services/credentialService.js";

export async function createCredential(req: Request, res: Response){   
    const { title, url, userName, password } = req.body
    const userId:number = res.locals.userId
    await credentialService.createCredentials({userId, title, url, userName, password});
    res.sendStatus(201);
}