"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceRouter = void 0;
const validateRequest_1 = require("./../../middleware/validateRequest");
const express_1 = require("express");
const experience_controller_1 = require("./experience.controller");
const experience_validation_1 = require("./experience.validation");
const authGaurd_1 = __importDefault(require("../../middleware/authGaurd"));
const role_constat_1 = require("../../helpers/role.constat");
const router = (0, express_1.Router)();
router.route('/').post((0, authGaurd_1.default)(role_constat_1.Role.admin), (0, validateRequest_1.validateRequest)(experience_validation_1.experienceValidation.createExperience), experience_controller_1.experienceController.createIntoDB).get(experience_controller_1.experienceController.findFromDB);
router.route("/:slug").get(experience_controller_1.experienceController.findSingle).patch((0, authGaurd_1.default)(role_constat_1.Role.admin), experience_controller_1.experienceController.updateFromDB).delete((0, authGaurd_1.default)(role_constat_1.Role.admin), experience_controller_1.experienceController.deleteFromDB);
exports.experienceRouter = router;
