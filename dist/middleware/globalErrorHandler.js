"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const globalErrorHandler = (err, req, res, next) => {
    const errorResponse = {
        statusCode: err.statusCode || 500,
        message: err.message || "Something went wrong",
        errorDetails: err,
    };
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
            errorResponse.statusCode = 409;
            errorResponse.message = `Unique validation error`;
        }
    }
    else if (err instanceof zod_1.ZodError) {
        errorResponse.statusCode = 400;
        errorResponse.message = err.issues
            .map((errObj) => errObj.message)
            .toString();
        errorResponse.errorDetails = err.issues.map((error) => {
            return {
                field: error.path[0],
                message: error.message,
            };
        });
    }
    else {
        errorResponse.statusCode = err.statusCode || 500;
        errorResponse.message = err.message;
        errorResponse.errorDetails = err;
    }
    res.status(errorResponse.statusCode).json({
        success: false,
        message: errorResponse.message,
        errorDetails: errorResponse.errorDetails,
    });
};
exports.globalErrorHandler = globalErrorHandler;
