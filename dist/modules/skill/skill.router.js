"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillRouter = void 0;
const express_1 = require("express");
const skill_controller_1 = require("./skill.controller");
const router = (0, express_1.Router)();
router.route('/').post(skill_controller_1.skillController.createIntoDB).get(skill_controller_1.skillController.findFromDB);
router.route("/:slug").get(skill_controller_1.skillController.findSingle).patch(skill_controller_1.skillController.updateFromDB).delete(skill_controller_1.skillController.deleteFromDB);
exports.skillRouter = router;
