import { User } from "../Features/user";
import { UserServices } from "../services/services";

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