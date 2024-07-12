import { Blog } from "@prisma/client"
import  prisma  from "../../lib/db"

import { generateUrl } from "../../helpers/generateUrl"


const createIntoDB = async(payload: Blog)=> {
    const slug = generateUrl(payload.title)
    const result = prisma.blog.create({
        data:{
            ...payload,
            slug
        }
    });

    return result;
}


const findFromDB = async()=>{
    const result = prisma.blog.findMany();

    return result;
}


const findSingle = async(slug:string)=>{
    const result = prisma.blog.findUnique({
        where:{
            slug: slug
        }
    });

    return result;
}


const updateFromDB = async(id:string,payload: Blog)=>{
    const result = prisma.blog.update({
        where:{
            id:id,
        },
        data: payload
    });

    return result;
}


const deleteFromDB = async(id:string)=>{
    const result = prisma.blog.delete({
        where:{
            id: id
        }
    });

    return result;
}



export const blogService = {createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB}