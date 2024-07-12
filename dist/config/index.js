"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
//joining '.env file'
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.config = {
    port: process.env.PORT,
    sort_round: process.env.SALT_ROUND,
    jwt_secret: process.env.JWT_SECRET,
    expires_in: process.env.EXPIRES_IN
};
