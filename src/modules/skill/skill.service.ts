
import { prisma } from "../../lib/db"
import { Skill } from "@prisma/client";


const createIntoDB = async(payload: Skill)=> {
    
    const result = prisma.skill.create({
        data:payload
    });

    return result;
}


const findFromDB = async()=>{
    const result = prisma.skill.findMany();

    return result;
}


const findSingle = async(slug:string)=>{
    const result = prisma.skill.findUnique({
        where:{
            id: slug
        }
    });

    return result;
}


const updateFromDB = async(id:string,payload: Skill)=>{
    const result = prisma.skill.update({
        where:{
            id:id,
        },
        data: payload
    });

    return result;
}


const deleteFromDB = async(id:string)=>{
    const result = prisma.skill.delete({
        where:{
            id: id
        }
    });

    return result;
}



export const skillService = {createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB}