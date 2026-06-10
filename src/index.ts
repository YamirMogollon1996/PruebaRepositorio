import express, { Router } from "express"
import dotenv from "dotenv"
import { RouterUsaurio } from "./Router/router"
import { db } from "./db/db.js"

const conectarPasswird = async () => {
        try {
                await db.authenticate()
                console.log("Coneccion a las MYSQL")
        } catch (error) {
                console.log(error)
        }
}

export const app = express()
let Port = 9000
app.listen(Port, () => {
        console.log("en el puerto de " + Port)
        conectarPasswird()

})
app.use(RouterUsaurio)
app.use(dotenv.config)
app.use(dotenv.config)
try {
        console.log(["Buenos Dias Peru"])
} catch (error) {
        console.log("no esta dentro Peru")

}
