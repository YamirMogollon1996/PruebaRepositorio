console.log("El sueño Developer Detalle") 
import {Sequelize} from "sequelize"  

export const db =   new Sequelize(
      "colegio", "root","12345678", 
        {
                host:"localhost" ,
                dialect:"mysql" ,
                // port :  ,
                // logging:false
        }
)
// export const Base_de_datos =  new Sequelize({
//     host:"127.0.0.1"  ,   
// })
// export const ContainerDeveloper  =   async   () =>{

//         console.log("Buenos Dias Developer")
// }

