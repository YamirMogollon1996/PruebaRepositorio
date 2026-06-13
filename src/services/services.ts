
import { UsuarioCreadoForMe } from "../Features/UsuarioEntitty";   
interface CrudUser {
        crear(usuario: UsuarioCreadoForMe): Promise<UsuarioCreadoForMe>
        obtenerTodos(): Promise<UsuarioCreadoForMe[]>;  
        deleteUser (  usuario:number) : Promise<number>  
        findUser ( usuario :  number ) : Promise<UsuarioCreadoForMe | null>
    
}


export class UserServices implements CrudUser {
        async crear(usuario: UsuarioCreadoForMe): Promise<UsuarioCreadoForMe> {
              return   await UsuarioCreadoForMe.create( usuario)
        }
        async obtenerTodos(): Promise<UsuarioCreadoForMe[]> {
                return await UsuarioCreadoForMe.findAll()       
        }
        async deleteUser(usuario: number): Promise<number> {
               return   await UsuarioCreadoForMe.destroy({
                        where:{
                                id: usuario
                        }
                })
        }
        async findUser(usuario: number): Promise<UsuarioCreadoForMe | null> {
               let encontraod =  await UsuarioCreadoForMe.findOne({where:{id:usuario}})
                if ( encontraod === null) return null 
                return encontraod

        }
}
