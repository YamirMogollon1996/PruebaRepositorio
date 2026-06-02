import { User } from "../Features/user.js";
import { MulterConfigure } from "../midlewares/Multer.js";
import { UserServices } from "../services/services.js";



export class ControlleUser {
    constructor(private readonly usuario: UserServices) { }
    addUserDetails(usuario: User) {

    
        this.usuario.addUser(usuario)

    }


    ListUser() {
    }
    MaskUser() {

    }

}
// export class controller {
//             constructor (  private readonly usuario : UserServices) {}
//             addUseiaro( res, req){
//             }
//             eliminar( req, res){
//             }
// }