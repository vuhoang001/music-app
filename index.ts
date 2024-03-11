import express, { Express } from "express";
import * as database from "./config/database"
import dotenv from "dotenv"

import clientRoutes from "./routes/client/index.route";

const app: Express = express()
const port: string | number = process.env.PORT || 3000

app.use(express.static("public"));

dotenv.config()

database.connect()

app.set('views', "./views")
app.set("view engine", "pug")

clientRoutes(app)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})