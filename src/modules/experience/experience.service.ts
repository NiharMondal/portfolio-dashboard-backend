
import  prisma  from "../../lib/db"
import { Experience } from "@prisma/client";


const createIntoDB = async(payload: Experience)=> {
   
    const result = await prisma.experience.create({
        data: payload
    });

    return result;
}


const findFromDB = async()=>{
    const result = await prisma.experience.findMany();

    return result;
}


const findSingle = async(slug:string)=>{
    const result = await prisma.experience.findUnique({
        where:{
            id: slug
        }
    });

    return result;
}


const updateFromDB = async(id:string,payload: Experience)=>{
    const result = await prisma.experience.update({
        where:{
            id:id,
        },
        data: payload
    });

    return result;
}


const deleteFromDB = async(id:string)=>{
    const result = await prisma.experience.delete({
        where:{
            id: id
        }
    });

    return result;
}



export const experienceService = {createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB}