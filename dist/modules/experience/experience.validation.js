"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceValidation = void 0;
const zod_1 = require("zod");
const createExperience = zod_1.z.object({
    position: zod_1.z.string({ required_error: "Position must be required" }).trim(),
    company: zod_1.z.string({ required_error: "Company name must be required" }).trim(),
    start_date: zod_1.z.string({ required_error: "Start date must be required" }),
    end_date: zod_1.z.string({}).optional(),
    responsibilities: zod_1.z.string({ required_error: "Write about your work responsibilities" })
});
exports.experienceValidation = { createExperience };
