import { credentials } from "@prisma/client";
import Cryptr from "cryptr";
import * as credentialsRepository from "../repositories/credentialsRepository.js"
import { decrypt } from "../utils/criptrUtils.js";

export type CreateCredentialData = Omit<credentials, "id" | "createdAt">

export async function createCredentials({userId, title, url, userName, password}){
    await verifyUserIdAndTitle(userId, title);
    password = await encryptedPassword(password);
    await credentialsRepository.createCredential({userId, title, url, userName, password})
}

async function verifyUserIdAndTitle(userId:number, title:string){
   const credential = await credentialsRepository.verifyUserIdAndTitle(userId, title)
   if(credential)throw{
    type:"conflict",
    message:"Título já existe!"
   }
}

async function encryptedPassword(password:string){
    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    return cryptr.encrypt(password);
}

export async function fetchCredentials(userId:number){    
    const credentials = await credentialsRepository.fetchCredentialByUserId(userId);

    credentials.map((credential) => {
        const decryptedPassword = decrypt(credential.password);
        credential["password"] = decryptedPassword;
    });

    return credentials
}

export async function fetchOneCredential(userId:number,id:number){    
    const credential = await credentialsRepository.fetchOneCredentialByUserIdAndId(userId,id)
    if(credential.length===0)throw{
        type:"unprocessable_entity",
        message:"Credencial inexistente"
    }

    credential.map((credential) => {
        const decryptedPassword = decrypt(credential.password);
        credential["password"] = decryptedPassword;
    });
    
    return credential
}

export async function deleteCredentials(userId:number, id:number){ 
    verifyUserIdAndId(userId,id);
    await credentialsRepository.deleteCredential(id);
}

async function verifyUserIdAndId(userId:number, id:number){
    const credential = await credentialsRepository.fetchCredentialByUserIdAndId(userId,id)
    if(!credential)throw{
        type:"unauthorized",
        message:"Não autorizado"
    }
}