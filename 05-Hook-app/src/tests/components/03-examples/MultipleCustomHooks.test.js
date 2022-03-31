import React from 'react'
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks'
import { useFetch } from '../../../Hooks/useFetch'
import { useCounter } from '../../../Hooks/useCounter'
jest.mock('../../../Hooks/useFetch')
jest.mock('../../../Hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks', () => {
  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {}
  })

  test('Debe de mostrarse correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })
    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Israeli',
        quote: 'Probando el mock'
      }],
      loading: false,
      error: null
    })

    const wrapper = shallow(<MultipleCustomHooks />)

    expect(wrapper.find('.alert').exists()).toBe(false)
    expect(wrapper.find('.mb-2').text().trim()).toBe('Probando el mock')
    expect(wrapper.find('footer').text().trim()).toBe('Israeli')
  })
})
