import { validateRequest } from './../../middleware/validateRequest';
import { Router } from "express";
import { projectController } from './project.controller';
import { projectValidation } from './project.validation';
import authGaurd from '../../middleware/authGaurd';
import { Role } from '../../helpers/role.constat';


const router = Router()

router.route('/').post(authGaurd(Role.admin),validateRequest(projectValidation.createProject), projectController.createIntoDB).get(projectController.findFromDB)

router.route("/:slug").get(projectController.findSingle).patch(authGaurd(Role.admin),projectController.updateFromDB).delete(authGaurd(Role.admin),projectController.deleteFromDB)

export const projectRouter = router;