
import prisma  from "../../lib/db"

import {  User } from "@prisma/client";
import CustomError from "../../utils/customError";
import bcrypt from 'bcrypt'
import { config } from "../../config";
import jwt, { JwtPayload } from 'jsonwebtoken'
const registerAdmin = async(payload: User)=> {
    
    //find user
    const user = await prisma.user.findUnique({where:{
        email: payload.email
    }});

    //check user is exist or not
    if(user){
        throw new CustomError(409, "Email address is already used!")
    };


    const hashedPass = await bcrypt.hash(payload.password, Number(config.sort_round!));

    const userData = await prisma.user.create({
        data:{
            ...payload,
            password: hashedPass
        }
    })

    return userData;
}

const adminLogin = async (payload:User)=>{
    //find user
    const user = await prisma.user.findUnique({where:{
        email: payload.email
    }});

    //check user is exist or not
    if(!user){
        throw new CustomError(401, "Invalid credentials")
    };

    const isCorrectPassword = await bcrypt.compare(payload.password, user.password);

    if(!isCorrectPassword){
        throw new CustomError(401, "Invalid credentials")

    }

    const jwtPayload = {
        id: user.id,
        email: user.email,
        role: user.role
    } as JwtPayload;

    const token = jwt.sign(jwtPayload, config.jwt_secret as string);

    return token;
}


const findFromDB = async()=>{
    const result = prisma.user.findMany();

    return result;
}


const findSingle = async(id:string)=>{
    const result = prisma.user.findUnique({
        where:{
            id: id
        }
    });

    return result;
}


const updateFromDB = async(id:string,payload: User)=>{
    const result = prisma.user.update({
        where:{
            id:id,
        },
        data: payload
    });

    return result;
}


const deleteFromDB = async(id:string)=>{
    const result = prisma.user.delete({
        where:{
            id: id
        }
    });

    return result;
}



export const authService = {registerAdmin, adminLogin ,findFromDB, findSingle, updateFromDB, deleteFromDB}