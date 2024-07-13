"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const validateRequest_1 = require("./../../middleware/validateRequest");
const express_1 = require("express");
const project_controller_1 = require("./project.controller");
const project_validation_1 = require("./project.validation");
const authGaurd_1 = __importDefault(require("../../middleware/authGaurd"));
const role_constat_1 = require("../../helpers/role.constat");
const router = (0, express_1.Router)();
router.route('/').post((0, authGaurd_1.default)(role_constat_1.Role.admin), (0, validateRequest_1.validateRequest)(project_validation_1.projectValidation.createProject), project_controller_1.projectController.createIntoDB).get(project_controller_1.projectController.findFromDB);
router.route("/:slug").get(project_controller_1.projectController.findSingle).patch((0, authGaurd_1.default)(role_constat_1.Role.admin), project_controller_1.projectController.updateFromDB).delete((0, authGaurd_1.default)(role_constat_1.Role.admin), project_controller_1.projectController.deleteFromDB);
exports.projectRouter = router;
