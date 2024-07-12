"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const adminCredentials = zod_1.default.object({
    email: zod_1.default.string({ required_error: 'Email must required' }).email({ message: "Must be a valid email" }).trim(),
    password: zod_1.default.string({ required_error: 'Password must required' })
});
exports.authValidation = { adminCredentials };
