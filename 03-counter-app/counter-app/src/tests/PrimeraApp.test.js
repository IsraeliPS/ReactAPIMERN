import React from "react";
import { render } from '@testing-library/react'//;
import '@testing-library/jest-dom/extend-expect'
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en elemento react',()=>{
    test('Debe mostrar en dom Hola soy Goku ', () => {
        const saludo="Hola, soy Goku";

        const {getByText} = render( <PrimeraApp saludo={saludo}/>);
        expect(getByText(saludo)).toBeInTheDocument();
        
    })
    
})