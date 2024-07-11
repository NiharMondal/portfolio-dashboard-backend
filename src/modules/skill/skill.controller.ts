import { Request, Response } from "express";
import asyncHadler from "../../utils/asyncHandler";

import { sendResponse } from "../../utils/sendResponse";
import { skillService } from "./skill.service";


const createIntoDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await skillService.createIntoDB(req.body);

    sendResponse(res, {
        statusCode:201,
        message:'Skill created successfully',
        result: result
    })
})


const findFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await skillService.findFromDB();

    sendResponse(res, {
        statusCode:200,
        message:'Skill fetched successfully',
        result: result
    })
})


const findSingle = asyncHadler(async(req:Request, res: Response)=>{
    const result = await skillService.findSingle(req.params.slug);

    sendResponse(res, {
        statusCode:200,
        message:'Single skill fetched successfully',
        result: result
    })
})



const updateFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await skillService.updateFromDB(req.params.slug, req.body);

    sendResponse(res, {
        statusCode:200,
        message:'Skill updated successfully',
        result: result
    })
})


const deleteFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await skillService.deleteFromDB(req.params.slug);

    sendResponse(res, {
        statusCode:200,
        message:'Skill deleted successfully',
        result: result
    })
})



export const skillController = {createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB}