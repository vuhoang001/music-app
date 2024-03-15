import { Router } from "express";
const router: Router = Router()
import * as controller from '../../controllers/admin/topics.controller'

import multer from 'multer'
import storageMulterHelper from '../../helpers/storageMulter.middleware'

const storage = storageMulterHelper()
const upload = multer({storage})

router.get('/', controller.index)

router.get('/create', controller.create)

router.post('/create', upload.single('avatar'), controller.createPost)

export const topicsRoute: Router = router