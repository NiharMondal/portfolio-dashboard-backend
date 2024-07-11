"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createBlog = zod_1.default.object({
    title: zod_1.default.string({ required_error: 'Title must required' }).trim(),
    description: zod_1.default.string({ required_error: 'Title must required' }),
    photo: zod_1.default.string().optional(),
});
exports.blogValidation = { createBlog };
