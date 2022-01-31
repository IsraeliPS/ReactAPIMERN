// import { render } from '@testing-library/react'

import React from 'react'

import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import PrimeraApp from '../PrimeraApp'
import '../setupTest'

describe('Pruebas en elemento react', () => {
  // test('Debe mostrar en dom Hola soy Goku ', () => {
  //     const saludo="Hola, soy Goku";

  //     const {getByText} = render( <PrimeraApp saludo={saludo}/>);
  //     expect(getByText(saludo)).toBeInTheDocument();

  // })
  test('debe mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, Soy Goku'
    const wrapper = shallow(<PrimeraApp saludo={saludo} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola, Soy Goku'
    const subTitulo = "i'll be back"
    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subTitulo} />)
    const textoParrafo = wrapper.find('p').text()
    console.log(textoParrafo)
    expect(textoParrafo).toBe(subTitulo)
  })
})
