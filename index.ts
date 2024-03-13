import express, { Express } from "express";
import * as database from "./config/database"
import path from "path"
import dotenv from "dotenv"

import clientRoutes from "./routes/client/index.route";
import adminRoutes from "./routes/admin/index.route";
import { systemConfig } from "./config/config";

const app: Express = express()
const port: string | number = process.env.PORT || 3000

app.use(express.static("public"));

dotenv.config()

database.connect()

app.set('views', "./views")
app.set("view engine", "pug")

clientRoutes(app)
adminRoutes(app)

// TinyMCE 
app.use(
    "/tinymce",
    express.static(path.join(__dirname, "node_modules", "tinymce"))
)

//App local variables
app.locals.prefixAdmin = systemConfig.prefixAdmin

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})