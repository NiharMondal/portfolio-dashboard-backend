"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createProject = zod_1.default.object({
    title: zod_1.default.string({ required_error: 'Title must required' }).trim(),
    live_link: zod_1.default.string({ required_error: 'Title must required' }),
    front_end: zod_1.default.string({ required_error: 'Title must required' }),
    back_end: zod_1.default.string({ required_error: 'Title must required' }).optional(),
    description: zod_1.default.string({ required_error: 'Title must required' }),
    photo: zod_1.default.string().optional(),
});
exports.projectValidation = { createProject };
