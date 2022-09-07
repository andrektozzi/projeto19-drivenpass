import prisma from "../dbStrategy/database.js";

export async function createNote({userId,title,note}){
    return prisma.safeNotes.create({
        data:{
            userId,
            title,
            note
        }
    });
}

export async function verifyNoteByUserIdAndTitle(userId:number, title:string){
    return prisma.safeNotes.findFirst({
        where:{
            userId,
            title
        }
    });
}

export async function fetchNotes(userId:number){
    return prisma.safeNotes.findMany({
        where:{
            userId
        }
    });
}

export async function fetchOneNote(userId:number,id:number){
    return prisma.safeNotes.findMany({
        where:{
            userId,
            id
        }
    });
}

export async function verifyNoteByUserIdAndId(userId:number, id:number){
    return prisma.safeNotes.findFirst({
        where:{
            userId,
            id
        }
    });
}

export async function deleteNote(id:number){
    return prisma.safeNotes.delete({
        where:{
            id
        }
    });
}