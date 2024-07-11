import { validateRequest } from './../../middleware/validateRequest';
import { Router } from "express";
import { projectController } from './project.controller';
import { projectValidation } from './project.validation';


const router = Router()

router.route('/').post(validateRequest(projectValidation.createProject), projectController.createIntoDB).get(projectController.findFromDB)

router.route("/:slug").get(projectController.findSingle).patch(projectController.updateFromDB).delete(projectController.deleteFromDB)

export const projectRouter = router;