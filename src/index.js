import    express from "express" 
import { Router,request, response} from "express"
import { RouterUsaurio } from "./Router/router.js"
const app =  express() 
let Port = 9000
app.listen( Port,  ()=>{
        console.log("en el puerto de " +  Port)
})
app.use(RouterUsaurio)