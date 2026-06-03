import { User } from "../Features/user.js"
export class UserServices {
        public lista: string[]
        constructor() {
                this.lista = []
        }
        addUser(usuario: User) {
                console.log(usuario)

        }
        ListUser() {
                this.lista.forEach((item, index) => {
                        console.log(index, item)
                })
        }
        NotesUserListDealle() {
        }
        LLaveDetalleSenior() {
        }
        BuscarUsuario() {
                console.log("llevame al Arto al sheep")
        }

        llamaaAmiusuarioDetalle() {
                console.log("buenis duas Log")

        }

}
