import express from "express";
import { UserServices } from "../services/services";
import { MidlewaresUser } from "../Features/midleware/userMidlewares";
import { ControlleUser } from "../controllers/controller";
// import { MulterConfigure } from "../midlewares/Multer.js";

let Userservices = new UserServices
let usuariocontroller = new ControlleUser(Userservices)
export const RouterUsaurio = express.Router();



RouterUsaurio.get("/ver", async (req, res) => {
  try {

    let datos = await usuariocontroller.ListUser()
    console.log(datos)
    return res.send(datos)
  } catch (error) {
    return res.send(error)
  }
});
RouterUsaurio.post("/crear", async (req, res) => {
  try {
    const { name, lastname, edad } = req.body
    if (!name || !lastname || !edad) {
      return res.sendStatus(400)
    }

    let datos = await (await usuariocontroller.addUserDetails(req.body)).dataValues
    return res.send(datos)
  } catch (error) {
  }
});


RouterUsaurio.delete("/eliminar/:id", async (req, res) => {

  const { id } = (req.params)
  if (!id) return res.send(404).json("no datos")
  let ConvertToinr = Number(id)
  let datos = await usuariocontroller.DeleUser(ConvertToinr)
  return res.send(datos)




})

RouterUsaurio.patch("/usuaruios", (req, res) => {
  return res.send({ msg: "actualizar en el usuariuo !!!" })
})

RouterUsaurio.get("/buscar/:id", async (req, res) => {

  try {
    const { id } = req.params
    let datos = await usuariocontroller.FindeUser(Number(id))
    if ( !datos) return res.status(404).json({error:"mensaje no encontrado"})
    return res.status(200).json( datos)
  
  } catch (error) { 
     return res.status(500).json({error:"Error interno"})

  }
})
