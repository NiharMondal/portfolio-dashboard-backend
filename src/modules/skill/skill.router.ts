import { validateRequest } from './../../middleware/validateRequest';
import { Router } from "express";
import { skillController } from './skill.controller';
import authGaurd from '../../middleware/authGaurd';
import { Role } from '../../helpers/role.constat';



const router = Router()

router.route('/').post(authGaurd(Role.admin), skillController.createIntoDB).get(skillController.findFromDB)

router.route("/:slug").get(skillController.findSingle).patch(authGaurd(Role.admin),skillController.updateFromDB).delete(authGaurd(Role.admin),skillController.deleteFromDB)

export const skillRouter = router;