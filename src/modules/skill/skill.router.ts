import { validateRequest } from './../../middleware/validateRequest';
import { Router } from "express";
import { skillController } from './skill.controller';



const router = Router()

router.route('/').post( skillController.createIntoDB).get(skillController.findFromDB)

router.route("/:slug").get(skillController.findSingle).patch(skillController.updateFromDB).delete(skillController.deleteFromDB)

export const skillRouter = router;