export function Suma(params:any , parametro2 :  any) {
            if ( params  <= 0 && parametro2 <= 0)   return false  
              if (typeof params !== "number" || typeof parametro2 !== "number")  return("error en tipo de datos");
            return  params  +  parametro2  
}

// Crea una función llamada normalizeEmails(listaEmails: string[]): string[] que:

// Elimine espacios en blanco al inicio y final.

// Convierta todo a minúsculas.

// Filtre los correos inválidos (que no contengan @ ni un dominio válido).

// Elimine duplicados, devolviendo solo correos únicos.

// Escribe un test unitario que valide:

// Que se normalizan correctamente los correos con mayúsculas y espacios.

// Que se eliminan los inválidos.

// Que no se repiten los duplicados.

// Que la lista final contiene solo correos válidos y únicos.

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 export function NormalizaEmails(listaemail:string[]) :  string [] {
    //   const primero  =  []
      let CleanEmail  =  listaemail.map((item, index) => item.trim().toLowerCase())   
      let  filtro =    CleanEmail.filter((item, index)  =>   emailRegex.test(  item  ))         
       let datos =  filtro.reduce((acum, item)=>{
                if (!acum.includes( item)) {
                                  acum.push(item)      
                }
                return acum
       },  [] as string[])
       return datos
}
let lista_datos = ["  JUAN@GMAIL.COM ", "maria@hotmail.com", "maria@hotmail.com", "maria@hotmail.com", "pedro@", "ana@outlook.com "]
console.log( NormalizaEmails( lista_datos ))



interface typesAcomps  {
      id : number ,
      nombre: string ,
      notas :  number []
}

const usuarios = [
  { id: 1, nombre: "Yamir", notas: [15, 18, 20] },
  { id: 2, nombre: "Lucía", notas: [12, 14, 16] },
  { id: 3, nombre: "Carlos", notas: [10, 11, 13] },
  { id: 4, nombre: "María", notas: [19, 17, 18] }
];


const  suma  = ( datos :  number[]) :  number =>{
        return datos.reduce((acum , item)  =>    acum + item ,0)
}  


export function OrdenarBuneDeveloper(params:typesAcomps[]) {  
  if (   params.length === 0  ) return false
   let datosReduce =  usuarios.reduce((acum ,item )=>{
            const neuvoitem = {...item ,  promedio :  suma(item.notas) / item.notas.length }
            acum.push( neuvoitem )
            return acum
    },  [])
    return datosReduce
}
OrdenarBuneDeveloper(  usuarios)