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
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillService = void 0;
const db_1 = require("../../lib/db");
const createIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = db_1.prisma.skill.create({
        data: payload
    });
    return result;
});
const findFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = db_1.prisma.skill.findMany();
    return result;
});
const findSingle = (slug) => __awaiter(void 0, void 0, void 0, function* () {
    const result = db_1.prisma.skill.findUnique({
        where: {
            id: slug
        }
    });
    return result;
});
const updateFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = db_1.prisma.skill.update({
        where: {
            id: id,
        },
        data: payload
    });
    return result;
});
const deleteFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = db_1.prisma.skill.delete({
        where: {
            id: id
        }
    });
    return result;
});
exports.skillService = { createIntoDB, findFromDB, findSingle, updateFromDB, deleteFromDB };
