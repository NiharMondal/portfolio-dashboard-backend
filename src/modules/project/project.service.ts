
import prisma  from "../../lib/db"

import { generateUrl } from "../../helpers/generateUrl"
import { Project } from "@prisma/client";


const createIntoDB = async(payload: Project)=> {
    const slug = generateUrl(payload.title)
    const result = prisma.project.create({
        data:{
            ...payload,
            slug
        }
    });

    return result;
}


const findFromDB = async()=>{
    const result = prisma.project.findMany();

    return result;
}


const findSingle = async(slug:string)=>{
    const result = prisma.project.findUnique({
        where:{
            slug: slug
        }
    });

    return result;
}


const updateFromDB = async(id:string,payload: Project)=>{
    const result = prisma.project.update({
        where:{
            id:id,
        },
        data: payload
    });

    return result;
}


const deleteFromDB = async(id:string)=>{
    const result = prisma.project.delete({
        where:{
            id: id
        }
    });

    return result;
}



export const projectService = {createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB}