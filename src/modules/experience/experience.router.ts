import { validateRequest } from './../../middleware/validateRequest';
import { Router } from "express";
import { experienceController } from './experience.controller';
import { experienceValidation } from './experience.validation';
import authGaurd from '../../middleware/authGaurd';
import { Role } from '../../helpers/role.constat';



const router = Router()

router.route('/').post(authGaurd(Role.admin), validateRequest(experienceValidation.createExperience),experienceController.createIntoDB).get(experienceController.findFromDB)

router.route("/:slug").get(experienceController.findSingle).patch(authGaurd(Role.admin),experienceController.updateFromDB).delete(authGaurd(Role.admin),experienceController.deleteFromDB)

export const experienceRouter = router;