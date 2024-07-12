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
exports.authService = void 0;
const db_1 = __importDefault(require("../../lib/db"));
const customError_1 = __importDefault(require("../../utils/customError"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("../../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerAdmin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //find user
    const user = yield db_1.default.user.findUnique({ where: {
            email: payload.email
        } });
    //check user is exist or not
    if (user) {
        throw new customError_1.default(409, "Email address is already used!");
    }
    ;
    const hashedPass = yield bcrypt_1.default.hash(payload.password, Number(config_1.config.sort_round));
    const userData = yield db_1.default.user.create({
        data: Object.assign(Object.assign({}, payload), { password: hashedPass })
    });
    return userData;
});
const adminLogin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    //find user
    const user = yield db_1.default.user.findUnique({ where: {
            email: payload.email
        } });
    //check user is exist or not
    if (!user) {
        throw new customError_1.default(401, "Invalid credentials");
    }
    ;
    const isCorrectPassword = yield bcrypt_1.default.compare(payload.password, user.password);
    if (!isCorrectPassword) {
        throw new customError_1.default(401, "Invalid credentials");
    }
    const jwtPayload = {
        id: user.id,
        email: user.email,
        role: user.role
    };
    const token = jsonwebtoken_1.default.sign(jwtPayload, config_1.config.jwt_secret);
    return {
        id: user.id,
        name: user.name,
        token
    };
});
const findFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.user.findMany();
    return result;
});
const findSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.user.findUnique({
        where: {
            id: id
        }
    });
    return result;
});
const updateFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.user.update({
        where: {
            id: id,
        },
        data: payload
    });
    return result;
});
const deleteFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.user.delete({
        where: {
            id: id
        }
    });
    return result;
});
exports.authService = { registerAdmin, adminLogin, findFromDB, findSingle, updateFromDB, deleteFromDB };
