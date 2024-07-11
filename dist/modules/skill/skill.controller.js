"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillController = void 0;
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const sendResponse_1 = require("../../utils/sendResponse");
const skill_service_1 = require("./skill.service");
const createIntoDB = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.skillService.createIntoDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        message: 'Skill created successfully',
        result: result
    });
}));
const findFromDB = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.skillService.findFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        message: 'Skill fetched successfully',
        result: result
    });
}));
const findSingle = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.skillService.findSingle(req.params.slug);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        message: 'Single skill fetched successfully',
        result: result
    });
}));
const updateFromDB = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.skillService.updateFromDB(req.params.slug, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        message: 'Skill updated successfully',
        result: result
    });
}));
const deleteFromDB = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield skill_service_1.skillService.deleteFromDB(req.params.slug);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        message: 'Skill deleted successfully',
        result: result
    });
}));
exports.skillController = { createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB };
