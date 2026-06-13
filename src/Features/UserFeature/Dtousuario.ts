// import { Usuario } from "../UsuarioEntitty";
// import {   } from "sequelize"  


export class UsuarioDto      {  
    public nombre: string;
    public lastname: string;
    constructor(nombre: string, lastname: string) {
    this.nombre = nombre,
            this.lastname = lastname
    }

    ObtenerMisDatos() {
        return this.lastname + ' - ' + this.nombre + 'Relaxo vision'
    }
    validateUsurio(nom: string, apel: string): Boolean {
        if (this.nombre === nom && this.lastname === apel) {
            return true
        }
        return false
    }


}


