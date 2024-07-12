import { Blog } from "@prisma/client"
import  prisma  from "../../lib/db"

import { generateUrl } from "../../helpers/generateUrl"


const createIntoDB = async(payload: Blog)=> {
    const slug = generateUrl(payload.title)
    const result = await prisma.blog.create({
        data:{
            ...payload,
            slug
        }
    });

    return result;
}


const findFromDB = async()=>{
    const result = await prisma.blog.findMany({orderBy:{
        createdAt:"desc"
    }});

    return result;
}


const findSingle = async(slug:string)=>{
    const result = await prisma.blog.findUnique({
        where:{
            slug: slug
        }
    });

    return result;
}


const updateFromDB = async(id:string,payload: Blog)=>{
    const result = await prisma.blog.update({
        where:{
            id:id,
        },
        data: payload
    });

    return result;
}


const deleteFromDB = async(id:string)=>{
    const result = await prisma.blog.delete({
        where:{
            id: id
        }
    });

    return result;
}



export const blogService = {createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB}