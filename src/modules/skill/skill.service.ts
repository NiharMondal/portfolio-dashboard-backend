
import prisma  from "../../lib/db"
import { Skill } from "@prisma/client";


const createIntoDB = async(payload: Skill)=> {
    
    const result = await prisma.skill.create({
        data:payload
    });

    return result;
}


const findFromDB = async()=>{
    const result = await prisma.skill.findMany();

    return result;
}


const findSingle = async(slug:string)=>{
    const result = await prisma.skill.findUnique({
        where:{
            id: slug
        }
    });

    return result;
}


const updateFromDB = async(id:string,payload: Skill)=>{
    const result = await prisma.skill.update({
        where:{
            id:id,
        },
        data: payload
    });

    return result;
}


const deleteFromDB = async(id:string)=>{
    const result = await prisma.skill.delete({
        where:{
            id: id
        }
    });

    return result;
}



export const skillService = {createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB}