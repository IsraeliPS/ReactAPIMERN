import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'

import CounterApp from '../CounterApp'
import '../setupTest'

describe('Pruebas en Elemento CounterApp', () => {
  let wrapper = shallow(<CounterApp value={123} />)

  beforeEach(() => {
    wrapper = shallow(<CounterApp value={123} />)
  })

  test('debe mostrar <CounterApp /> correctamente y sus valore', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe mostrar el valor por defecto', () => {
    const valor = '100'
    const wrapper = shallow(<CounterApp value={valor} />)
    const cantidadEnviada = wrapper.find('h2').text()
    expect(cantidadEnviada).toBe(valor)
  })

  test('Debe de incrementar con el botón +1', () => {
    wrapper.find('button').at(0).simulate('click')
    const counterText = wrapper.find('h2').text()
    expect(counterText).toBe('124')
  })

  test('Debe de decrementar con el botón -1', () => {
    wrapper.find('button').at(2).simulate('click')
    const counterText = wrapper.find('h2').text()
    expect(counterText).toBe('122')
  })

  test('Debe de colocar el valor por defecto con el boton reset', () => {
    const valor = 100
    const wrapper = shallow(<CounterApp value={valor} />)
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(1).simulate('click')
    const counterText = wrapper.find('h2').text()
    expect(valor).toBe(100)
  })
})
