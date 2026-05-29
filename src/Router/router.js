import express from "express";
import { ControlleUser } from "../controllers/controller";
let usuariocontroller =  new ControlleUser()
export const RouterUsaurio = express.Router();
RouterUsaurio.get("/", async (req, res) => { 
      try {
      
      let primero =  await usuariocontroller.addUserDetails(req.body)
      return res.send( primero)
      } catch (error) {
          return res.send(error)
        }   
});
RouterUsaurio.post("/", (req, res) => {
  return res.send("crear el body");
});
