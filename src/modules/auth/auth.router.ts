import { validateRequest } from './../../middleware/validateRequest';
import { Router } from "express";
import { authController } from './auth.controller';
import { authValidation } from './auth.validation';



const router = Router()


router.post("/register", validateRequest(authValidation.adminCredentials) ,authController.registerAdmin)

router.post("/login", validateRequest(authValidation.adminCredentials), authController.adminLogin)

router.route("/:id").get(authController.findSingle).patch(authController.updateFromDB).delete(authController.deleteFromDB)

export const authRouter = router;