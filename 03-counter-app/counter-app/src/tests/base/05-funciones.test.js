import { getUser,getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05 funciones',()=>{
    test('Debe retornar un objeto ', () => {
        const userTest={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user=getUser()
        expect(user).toEqual(userTest)
    })
    
    test('recibir un parametro y retonar un objeto ', () => {
        const getUsuarioActivoTest=(nombre)=>({
            uid: 'ABC567',
            username: nombre
        })

        const getUser=getUsuarioActivo("Miguel")
        expect(getUser).toEqual(getUsuarioActivoTest("Miguel"))
    })
    
})

