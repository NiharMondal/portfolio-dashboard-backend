import { Request, Response } from "express";
import asyncHadler from "../../utils/asyncHandler";

import { sendResponse } from "../../utils/sendResponse";
import { projectService } from "./project.service";

const createIntoDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await projectService.createIntoDB(req.body);

    sendResponse(res, {
        statusCode:201,
        message:'Project created successfully',
        result: result
    })
})


const findFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await projectService.findFromDB();

    sendResponse(res, {
        statusCode:200,
        message:'Project fetched successfully',
        result: result
    })
})


const findSingle = asyncHadler(async(req:Request, res: Response)=>{
    const result = await projectService.findSingle(req.params.slug);

    sendResponse(res, {
        statusCode:200,
        message:'Single project fetched successfully',
        result: result
    })
})



const updateFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await projectService.updateFromDB(req.params.slug, req.body);

    sendResponse(res, {
        statusCode:200,
        message:'Project updated successfully',
        result: result
    })
})


const deleteFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await projectService.deleteFromDB(req.params.slug);

    sendResponse(res, {
        statusCode:200,
        message:'Project deleted successfully',
        result: result
    })
})



export const projectController = {createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB}