"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(code, message) {
        super(message);
        this.statusCode = code;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = CustomError;
