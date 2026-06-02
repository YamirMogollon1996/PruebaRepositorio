console.log("El sueño Developer Detalle") 
import {Sequelize} from "sequelize" 


export const db =   new Sequelize(
      "aparentemente", "host","1233", 
        {
                host:"localhost" ,
                dialect:"mysql" ,
                port : 3006 ,
                logging:false
        }
)
