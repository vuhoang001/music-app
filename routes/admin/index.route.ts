import { Express } from "express"
import { dashboardRoute } from "./dashboard.route"
import { systemConfig } from "../../config/config"
const adminRoutes = (app: Express): void => {
    const PATH_ADMIN = `${systemConfig.prefixAdmin}`

    app.use(`/${PATH_ADMIN}`, dashboardRoute)

}

export default adminRoutes