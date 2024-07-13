"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillRouter = void 0;
const express_1 = require("express");
const skill_controller_1 = require("./skill.controller");
const authGaurd_1 = __importDefault(require("../../middleware/authGaurd"));
const role_constat_1 = require("../../helpers/role.constat");
const router = (0, express_1.Router)();
router.route('/').post((0, authGaurd_1.default)(role_constat_1.Role.admin), skill_controller_1.skillController.createIntoDB).get(skill_controller_1.skillController.findFromDB);
router.route("/:slug").get(skill_controller_1.skillController.findSingle).patch((0, authGaurd_1.default)(role_constat_1.Role.admin), skill_controller_1.skillController.updateFromDB).delete((0, authGaurd_1.default)(role_constat_1.Role.admin), skill_controller_1.skillController.deleteFromDB);
exports.skillRouter = router;
