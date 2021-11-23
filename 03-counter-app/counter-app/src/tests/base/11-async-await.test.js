import { getImagen } from "../../base/11-async-await"

describe('Pruebas asincronas y fetch',()=>{

    test('debe retornar url de la imagen ', async() => {
        const url=await getImagen();
        
        expect(url.includes('https://')).toBe(true)
    })
    
})