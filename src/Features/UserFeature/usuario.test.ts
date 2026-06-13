import { app } from "../.."
// import { NormalizaEmails, Suma, OrdenarBuneDeveloper } from "./suma"
import request from "supertest"
import { Suma } from "./suma";
import { UserServices } from "../../services/services"
import { UsuarioCreadoForMe } from "../UsuarioEntitty";
import { db } from "../../db/db";

describe("Probando mis apis ", () => {
  test("Debe fallar si no me falla el body", async () => {
    const res = await request(app).post("/user/crear").send({})
    expect(res.status).toBe(400)

  })

  test("Emppty  names is obejtoc", async () => {

    UsuarioCreadoForMe.create = jest.fn().mockResolvedValue({
      dataValues: {
        id: "1",
        name: "mogollon",
        lastname: "prueba",
        edad: 25,
      },
    });

    const res = await request(app)
      .post("/user/crear")
      .send({ name: "mogollon", lastname: "prueba", edad: 25 });

    // Validar que el body tenga las propiedades
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("lastname");
    expect(res.body).toHaveProperty("edad");
  })





})


test("Probar mi Peticion Post", async () => {

  UsuarioCreadoForMe.create = jest.fn().mockResolvedValue({
    dataValues: {
      id: "1",
      name: "yamir",
      lastname: "prueba",
      edad: 25
    }

  })


  const res = await request(app).post("/user/crear").send({ id: "1", name: "yamir", lastname: "prueba", edad: 25 })
  expect(res.body).toEqual(expect.objectContaining({
    id: "1",
    name: "yamir",
    lastname: "prueba",
    edad: 25

  }))
})




test("Probar  / get/user", async () => {
  let Res = await request(app).get("/user/ver")
  expect(Res.statusCode).toBe(200)
})


test("Get/user/ver", async () => {
  UsuarioCreadoForMe.findAll = jest.fn().mockResolvedValue([
    { id: 2, name: "mogollon", lastname: "mogollon@gmail.com", edad: 100 }

  ])
  const Servicio = new UserServices()
  const resultado = await Servicio.obtenerTodos()

  expect(Array.isArray(resultado)).toBe(true)
  expect(request.length).toBeGreaterThan(0)
  expect(resultado).toEqual([{ id: 2, name: "mogollon", lastname: "mogollon@gmail.com", edad: 100 }])




})





afterAll(async () => {
  await db.close()
})


// describe("Pruebas de Suma", () => {


//   test("1 + 1 === 2", () => {
//     const resultado = Suma(1, 1);
//     expect(resultado).toBe(2);
//   });
//   test("no pedir 0 ", () => {
//     const resultadoTener = Suma(0, 0)
//     expect(resultadoTener).toBe(false)
//   })

//   test("Error de Tipo Datos", () => {
//     const reusltadoErrro = Suma("3", "3")
//     expect(reusltadoErrro).toBe('error en tipo de datos')
//   })
// });







// describe("limpieza de dni por espacio ", () => {
//   test("valida espacio en el dni", () => {
//     const prueba = NormalizaEmails(["  yamir@gmail.com  "])
//     expect(prueba).toEqual(["yamir@gmail.com"])

//   })

//   test("eliminar duplciados", () => {

//     const eliminardata = NormalizaEmails(["yamir@gmail.com", "yamir@gmail.com"])
//     expect(eliminardata).toEqual(["yamir@gmail.com"])

//   })
//   test("procesa lista mixta con válidos e inválidos", () => {
//     const input = [
//       "  JUAN@GMAIL.COM ",
//       "maria@hotmail.com",
//       "maria@hotmail.com",
//       "pedro@",
//       "ana@outlook.com "
//     ];
//     const result = NormalizaEmails(input);
//     expect(result).toEqual([
//       "juan@gmail.com",
//       "maria@hotmail.com",
//       "ana@outlook.com"
//     ]);
//   });


// })


// describe(" Limpiezar data and detalle ", () => {
//   test('validar el array que el array no este vacio', () => {
//     const resultado = OrdenarBuneDeveloper([])
//     expect(resultado).toBe(false)

//   })

//   test('validar que los items tengan las propiedades Proemido ', () => {
//     const Resultados = [
//       { nombre: "Juan", Proemido: 15 },
//       { nombre: "Ana", Proemido: 20 },
//       { nombre: "Luis", Proemido: 18 }
//     ];
//     Resultados.forEach((item, index) => {
//       expect(item).toHaveProperty("Proemido")

//     })
//   })
//   test('Validar que la propeidad sea number', () => {
//     const Resultados = [
//       { nombre: "Juan", Proemido: 15 },
//       { nombre: "Ana", Proemido: 20 },
//       { nombre: "Luis", Proemido: 18 }
//     ];
//     Resultados.forEach((item, index) => {
//       expect(typeof item.Proemido).toBe('number')

//     })
//   })


// })

// describe("probar Developer obtener", () => {
//   test('validar mi endpoint', async () => {
//     const res = await request(app).get("/")
//     console.log(res)
//     expect(res.statusCode).toBe(200)
//     expect(res.body).toEqual({msg:"modsadgollon"})

//   })
//   //
// })
