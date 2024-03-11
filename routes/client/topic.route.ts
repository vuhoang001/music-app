import { Request, Response, Router } from "express";
import * as controller from "../../controllers/client/topics.controller"
const router: Router = Router()
import Topic from "../../models/topic.model";



router.get('/', controller.topics)

export const topicRouter: Router = router