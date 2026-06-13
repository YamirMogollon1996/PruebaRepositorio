import { User } from "../Features/user.js";
import { UsuarioCreadoForMe } from "../Features/UsuarioEntitty.js";
// import { MulterConfigure } from "../midlewares/Multer.js";
import { UserServices } from "../services/services.js";

export class ControlleUser {
    constructor(private readonly usuario: UserServices) { }

    async addUserDetails(usuario: UsuarioCreadoForMe) {
         return    this.usuario.crear(usuario)
    }
    async ListUser() {
        try {
            return await this.usuario.obtenerTodos()
        } catch (error) {
          console.log( error)
        }
    }
    async DeleUser(  usuario :  number) {
        try {
            return await this.usuario.deleteUser( usuario)
        } catch (error) {
            
        }
    } 
    async FindeUser( usuario :  number )   {
        return await this.usuario.findUser(  usuario)
    }




}