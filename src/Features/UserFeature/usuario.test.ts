import { app } from "../.."
import {  NormalizaEmails , Suma , OrdenarBuneDeveloper  } from "./suma"
import request  from "supertest"


describe("Pruebas de Suma", () => {  

  test("1 + 1 === 2", () => {
    const resultado = Suma(1,1);
    expect(resultado).toBe(2);
  }); 
  test ("no pedir 0 " ,  () =>{
         const resultadoTener =   Suma(0,0) 
         expect( resultadoTener ).toBe(false)
  }) 

  test ("Error de Tipo Datos"  ,  () =>{
                const reusltadoErrro   =  Suma("3","3") 
                expect( reusltadoErrro).toBe('error en tipo de datos')
              })
});

describe("limpieza de dni por espacio " , () =>{
    test("valida espacio en el dni" ,  () =>{

          const prueba   = NormalizaEmails(["  yamir@gmail.com  "]) 
          expect(prueba).toEqual(["yamir@gmail.com"])

    })
    
    test("eliminar duplciados" , () =>{

        const eliminardata  =  NormalizaEmails(["yamir@gmail.com","yamir@gmail.com"]) 
        expect( eliminardata).toEqual(["yamir@gmail.com"])

    })
    test("procesa lista mixta con válidos e inválidos", () => {
    const input = [
      "  JUAN@GMAIL.COM ",
      "maria@hotmail.com",
      "maria@hotmail.com",
      "pedro@",
      "ana@outlook.com "
    ];
    const result = NormalizaEmails(input);
    expect(result).toEqual([
      "juan@gmail.com",
      "maria@hotmail.com",
      "ana@outlook.com"
    ]);
  });
 

})


describe (" Limpiezar data and detalle " ,  () =>{
    test('validar el array que el array no este vacio' ,() =>{  
              const resultado = OrdenarBuneDeveloper([])  
              expect(resultado).toBe(false)

    })

    test ('validar que los items tengan las propiedades Proemido ' , () =>{
        const Resultados = [
          { nombre: "Juan", Proemido: 15 },
          { nombre: "Ana", Proemido: 20 },
          { nombre: "Luis", Proemido: 18 }
  ];
    Resultados.forEach((item, index) =>{
            expect(item).toHaveProperty("Proemido")
        
    })
    })
    test ('Validar que la propeidad sea number' , () =>{
        const Resultados = [
          { nombre: "Juan", Proemido: 15 },
          { nombre: "Ana", Proemido: 20 },
          { nombre: "Luis", Proemido: 18 }
  ];
    Resultados.forEach((item, index) =>{
            expect(  typeof  item.Proemido).toBe('number')
        
    })
    })

  
})
describe("probar Developer obtener" ,  async () =>{
      const res =  await request(app).get("/saludo" ) 
      expect(res.statusCode).toBe(200)  
    // 
})
