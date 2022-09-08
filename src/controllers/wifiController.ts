import { Request, Response } from "express";
import * as wifiService from "../services/wifiService.js";

export async function createWifi(req: Request, res: Response){
    const { title, networkName, password } = req.body;
    const userId:number = res.locals.userId;
    await wifiService.createWifi({userId,title, networkName, password});
    res.sendStatus(201);
}

export async function fetchWifis(req: Request, res: Response){
    const userId:number = res.locals.userId;
    const wifis = await wifiService.fetchWifis(userId);
    res.status(200).send(wifis);
}