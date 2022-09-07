import { Request, Response } from "express";
import * as noteService from "../services/safeNotesService.js"

export async function createNote(req: Request, res: Response){
    const { title, note } = req.body;
    const userId:number = res.locals.userId;
    await noteService.createNote({userId,title, note});
    res.sendStatus(201);    
}