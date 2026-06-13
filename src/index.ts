import express from "express"
import dotenv from "dotenv"
import { RouterUsaurio } from "./Router/router"
import { db } from "./db/db" 
import morgan from "morgan"


dotenv.config()   
export const app = express()
let Port = process.env.PORT || 3499

// Middlewares primero

const boostrap = async () => {
    try {
        await db.authenticate() 
        console.log("✅ Conectado a la Base de datos")
        await db.sync() 
        console.log("✅ Tablas sincronizadas")
    } catch (error) {
        console.error("❌ Error al conectar la BD:", error)
    }
}

app.use(morgan('dev'))
app.use(express.json())
app.use("/user" , RouterUsaurio)
boostrap()
app.listen(Port, () => {
    console.log("[Servidor en puerto] " + Port)
})

