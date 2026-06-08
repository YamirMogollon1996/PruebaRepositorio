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


export const Base_de_datos =  new Sequelize({
    host:"127.0.0.1"  ,   

})


export const ContainerDeveloper  =   async   () =>{

        console.log("Buenos Dias Developer")
}

