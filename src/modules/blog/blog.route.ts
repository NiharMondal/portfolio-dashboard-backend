import { validateRequest } from './../../middleware/validateRequest';
import { Router } from "express";
import { blogController } from "./blog.controller";
import { blogValidation } from './blog.validation';
import authGaurd from '../../middleware/authGaurd';
import { Role } from '../../helpers/role.constat';

const router = Router()

router.route('/').post(authGaurd(Role.admin),validateRequest(blogValidation.createBlog) ,blogController.createIntoDB).get(blogController.findFromDB)

router.route("/:slug").get(blogController.findSingle).patch(authGaurd(Role.admin),blogController.updateFromDB).delete(authGaurd(Role.admin),blogController.deleteFromDB)

export const blogRouter = router;