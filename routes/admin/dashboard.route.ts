import { Router } from "express";
const router: Router = Router()

import * as controller from '../../controllers/admin/dashboard.controller'

router.get('/dashboard', controller.index)

export const dashboardRoute: Router = router