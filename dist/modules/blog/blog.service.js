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
exports.blogService = void 0;
const db_1 = __importDefault(require("../../lib/db"));
const generateUrl_1 = require("../../helpers/generateUrl");
const createIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const slug = (0, generateUrl_1.generateUrl)(payload.title);
    const result = db_1.default.blog.create({
        data: Object.assign(Object.assign({}, payload), { slug })
    });
    return result;
});
const findFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = db_1.default.blog.findMany();
    return result;
});
const findSingle = (slug) => __awaiter(void 0, void 0, void 0, function* () {
    const result = db_1.default.blog.findUnique({
        where: {
            slug: slug
        }
    });
    return result;
});
const updateFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = db_1.default.blog.update({
        where: {
            id: id,
        },
        data: payload
    });
    return result;
});
const deleteFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = db_1.default.blog.delete({
        where: {
            id: id
        }
    });
    return result;
});
exports.blogService = { createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB };
