import { Request, Response } from "express";
import asyncHadler from "../../utils/asyncHandler";

import { sendResponse } from "../../utils/sendResponse";
import { experienceService } from "./experience.service";


const createIntoDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await experienceService.createIntoDB(req.body);

    sendResponse(res, {
        statusCode:201,
        message:'Experience created successfully',
        result: result
    })
})


const findFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await experienceService.findFromDB();

    sendResponse(res, {
        statusCode:200,
        message:'Experience fetched successfully',
        result: result
    })
})


const findSingle = asyncHadler(async(req:Request, res: Response)=>{
    const result = await experienceService.findSingle(req.params.slug);

    sendResponse(res, {
        statusCode:200,
        message:'Single experience fetched successfully',
        result: result
    })
})



const updateFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await experienceService.updateFromDB(req.params.slug, req.body);

    sendResponse(res, {
        statusCode:200,
        message:'Experience updated successfully',
        result: result
    })
})


const deleteFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await experienceService.deleteFromDB(req.params.slug);

    sendResponse(res, {
        statusCode:200,
        message:'Experience deleted successfully',
        result: result
    })
})



export const experienceController = {createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB}