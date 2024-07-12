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
exports.authController = void 0;
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const sendResponse_1 = require("../../utils/sendResponse");
const auth_service_1 = require("./auth.service");
const registerAdmin = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.authService.registerAdmin(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        message: 'Admin created successfully',
        result: result
    });
}));
const adminLogin = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.authService.adminLogin(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        message: 'Wellcome to your dashboard',
        result: result
    });
}));
const findFromDB = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.authService.findFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        message: 'Admin fetched successfully',
        result: result
    });
}));
const findSingle = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.authService.findSingle(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        message: 'Single admin fetched successfully',
        result: result
    });
}));
const updateFromDB = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.authService.updateFromDB(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        message: 'Admin updated successfully',
        result: result
    });
}));
const deleteFromDB = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.authService.deleteFromDB(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        message: 'Admin deleted successfully',
        result: result
    });
}));
exports.authController = { registerAdmin, adminLogin, findFromDB, findSingle, updateFromDB, deleteFromDB };
