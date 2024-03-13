import { Express } from "express"
import { dashboardRoute } from "./dashboard.route"
import { systemConfig } from "../../config/config"
import { topicsRoute } from "./topics.route"
const adminRoutes = (app: Express): void => {
    const PATH_ADMIN = `${systemConfig.prefixAdmin}`

    app.use(`/${PATH_ADMIN}/dashboard`, dashboardRoute)

    app.use(`/${PATH_ADMIN}/topics`, topicsRoute)

}

export default adminRoutes