import { Router } from "express";
const router: Router = Router()

import * as controller from "../../controllers/client/songs.controller"

router.get('/:slugTopic', controller.list)

router.get('/detail/:slugSong', controller.detail)

router.patch('/like/:typeLike/:idSong', controller.like)

export const songRouter: Router = router