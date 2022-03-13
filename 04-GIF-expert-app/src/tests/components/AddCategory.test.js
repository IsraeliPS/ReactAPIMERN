import React from 'react'
import AddCategory from '../../components/AddCategory'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'

describe('Pruebas en <AddCategory />', () => {
  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input')
    const value = 'Hola mundo'
    input.simulate('change', { target: { value } })
    expect(wrapper.find('p').text().trim()).toBe(value)
  })

  test('No debe de posterar el submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault () {} })

    expect(setCategories).not.toHaveBeenCalled()
  })

  test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'Hola'
    const input = wrapper.find('input')
    input.simulate('change', { target: { value } })

    const form = wrapper.find('form')
    form.simulate('submit', { preventDefault () {} })

    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledTimes(1)
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
    expect(input.prop('value')).toBe('')
  })
})
