import express from "express"
import { RouterUsaurio } from "./Router/router.js"
import dotenv from "dotenv"
const app = express()
let Port = 9000
app.listen(Port, () => {
        console.log("en el puerto de " + Port)
})
app.use(RouterUsaurio)
app.use( dotenv.config) 
console.log("stagin Area")
app.use(dotenv.config)

console.log("Sataggin Ar --")
console.log("Estamosen la Developer --stack")
console.log("mogollon")
console.log("Estamosen la Developer --stack") 
try {
        console.log(["Buenos Dias Peru"])
} catch (error) {
        console.log("no esta dentro Peru")
        
}
