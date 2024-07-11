import { Request, Response } from "express";
import asyncHadler from "../../utils/asyncHandler";
import { blogService } from "./blog.service";
import { sendResponse } from "../../utils/sendResponse";

const createIntoDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await blogService.createIntoDB(req.body);

    sendResponse(res, {
        statusCode:201,
        message:'Blog created successfully',
        result: result
    })
})


const findFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await blogService.findFromDB();

    sendResponse(res, {
        statusCode:201,
        message:'Blog fetched successfully',
        result: result
    })
})


const findSingle = asyncHadler(async(req:Request, res: Response)=>{
    const result = await blogService.findSingle(req.params.slug);

    sendResponse(res, {
        statusCode:201,
        message:'Single blog fetched successfully',
        result: result
    })
})



const updateFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await blogService.updateFromDB(req.params.slug, req.body);

    sendResponse(res, {
        statusCode:201,
        message:'Blog updated successfully',
        result: result
    })
})


const deleteFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await blogService.deleteFromDB(req.params.slug);

    sendResponse(res, {
        statusCode:201,
        message:'Blog deleted successfully',
        result: result
    })
})



export const blogController = {createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB}