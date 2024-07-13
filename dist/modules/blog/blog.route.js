"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const validateRequest_1 = require("./../../middleware/validateRequest");
const express_1 = require("express");
const blog_controller_1 = require("./blog.controller");
const blog_validation_1 = require("./blog.validation");
const authGaurd_1 = __importDefault(require("../../middleware/authGaurd"));
const role_constat_1 = require("../../helpers/role.constat");
const router = (0, express_1.Router)();
router.route('/').post((0, authGaurd_1.default)(role_constat_1.Role.admin), (0, validateRequest_1.validateRequest)(blog_validation_1.blogValidation.createBlog), blog_controller_1.blogController.createIntoDB).get(blog_controller_1.blogController.findFromDB);
router.route("/:slug").get(blog_controller_1.blogController.findSingle).patch((0, authGaurd_1.default)(role_constat_1.Role.admin), blog_controller_1.blogController.updateFromDB).delete((0, authGaurd_1.default)(role_constat_1.Role.admin), blog_controller_1.blogController.deleteFromDB);
exports.blogRouter = router;
