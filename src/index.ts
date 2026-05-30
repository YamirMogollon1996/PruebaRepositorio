import express from "express"
import { RouterUsaurio } from "./Router/router.js"
import dotenv from "dotenv"
import { db } from "./db/db.js"
const conectarPasswird = async () => {
        try {
                await db.authenticate()
                console.log("Coneccion a las MYSQL")

        } catch (error) {
                console.log(error)
        }
}

const app = express()
let Port = 9000
app.listen(Port, () => {
        console.log("en el puerto de " + Port)
        conectarPasswird()

})

app.use(RouterUsaurio)
app.use(dotenv.config)
console.log("stagin Area")
app.use(dotenv.config)
console.log("Sataggin Ar --")
console.log("Estamosen la Developer --stack")
console.log("mogollon")
console.log("Estamosen la Developer --stack")
console.log("Estamosen la Developer --stack") 


try {
        console.log(["Buenos Dias Peru"])
} catch (error) {
        console.log("no esta dentro Peru")

}
