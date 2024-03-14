import { Router } from "express";
import * as controller from '../../controllers/admin/singers.controller'
const router: Router = Router()

router.get('/', controller.index)

export const singersRouter: Router = router
