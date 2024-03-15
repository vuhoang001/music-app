import express, { Express } from "express";
import * as database from "./config/database"
import path from "path"
import dotenv from "dotenv"

import bodyParser from "body-parser";

import clientRoutes from "./routes/client/index.route";
import adminRoutes from "./routes/admin/index.route";
import { systemConfig } from "./config/config";

const app: Express = express()
const port: string | number = process.env.PORT || 3000

//body-parse
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"));

dotenv.config()

database.connect()

app.set('views', "./views")
app.set("view engine", "pug")



// TinyMCE 
app.use(
    "/tinymce",
    express.static(path.join(__dirname, "node_modules", "tinymce"))
)

//App local variables
app.locals.prefixAdmin = systemConfig.prefixAdmin


clientRoutes(app)
adminRoutes(app)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})