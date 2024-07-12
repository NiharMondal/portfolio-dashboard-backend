import { Request, Response } from "express";
import asyncHadler from "../../utils/asyncHandler";
import { sendResponse } from "../../utils/sendResponse";
import { authService } from "./auth.service";


const registerAdmin = asyncHadler(async(req:Request, res: Response)=>{
    const result = await authService.registerAdmin(req.body);

    sendResponse(res, {
        statusCode:201,
        message:'Admin created successfully',
        result: result
    })
})

const adminLogin = asyncHadler(async(req:Request, res: Response)=>{
    const result = await authService.adminLogin(req.body);

    sendResponse(res, {
        statusCode:200,
        message:'Wellcome to your dashboard',
        result: result
    })
})

const findFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await authService.findFromDB();

    sendResponse(res, {
        statusCode:200,
        message:'Admin fetched successfully',
        result: result
    })
})


const findSingle = asyncHadler(async(req:Request, res: Response)=>{
    const result = await authService.findSingle(req.params.id);

    sendResponse(res, {
        statusCode:200,
        message:'Single admin fetched successfully',
        result: result
    })
})



const updateFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await authService.updateFromDB(req.params.id, req.body);

    sendResponse(res, {
        statusCode:200,
        message:'Admin updated successfully',
        result: result
    })
})


const deleteFromDB = asyncHadler(async(req:Request, res: Response)=>{
    const result = await authService.deleteFromDB(req.params.id);

    sendResponse(res, {
        statusCode:200,
        message:'Admin deleted successfully',
        result: result
    })
})



export const authController = {registerAdmin, adminLogin, findFromDB, findSingle, updateFromDB, deleteFromDB}