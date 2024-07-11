import { validateRequest } from './../../middleware/validateRequest';
import { Router } from "express";
import { experienceController } from './experience.controller';
import { experienceValidation } from './experience.validation';



const router = Router()

router.route('/').post(validateRequest(experienceValidation.createExperience),experienceController.createIntoDB).get(experienceController.findFromDB)

router.route("/:slug").get(experienceController.findSingle).patch(experienceController.updateFromDB).delete(experienceController.deleteFromDB)

export const experienceRouter = router;