import { validateRequest } from './../../middleware/validateRequest';
import { Router } from "express";
import { blogController } from "./blog.controller";
import { blogValidation } from './blog.validation';

const router = Router()

router.route('/').post(validateRequest(blogValidation.createBlog) ,blogController.createIntoDB).get(blogController.findFromDB)

router.route("/:slug").get(blogController.findSingle).patch(blogController.updateFromDB).delete(blogController.deleteFromDB)

export const blogRouter = router;