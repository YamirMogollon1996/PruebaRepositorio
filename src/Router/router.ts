import express from "express";
import { ControlleUser } from "../controllers/controller.js";
import { UserServices } from "../services/services.js";
import { MidlewaresUser } from "../Features/midleware/userMidlewares.js";
let Userservices = new UserServices
let usuariocontroller = new ControlleUser(Userservices)

export const RouterUsaurio = express.Router();
RouterUsaurio.get("/",   MidlewaresUser , async (req, res) => {
  try {
    let primero = await usuariocontroller.addUserDetails(req.body)
    return res.send(primero)
  } catch (error) {
    return res.send(error)
  }
});

RouterUsaurio.post("/", (req, res) => {
  return res.send("crear el body");
});
RouterUsaurio.delete("/" ,  ( req , res) =>{
      return res.send({msg:`"Se elimino el usuario con el id ${req.body} "    `})
})


RouterUsaurio.patch("/usuaruios" , ( req,  res) =>{
    return res.send({msg:"actualizar en el usuariuo !!!"})
})