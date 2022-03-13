import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import '../../setupTests'

import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas de <GifGrid/>', () => {
  const category = 'Fairy Tail'
  //   const wrapper = shallow(<GifGrid category={category} />)

  test('Debe mostrar el componente correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe mostrar items cuando se carga el useFetchGifs', () => {
    const gifs = [{
      id: 'abc',
      url: 'https://example/cosa.jpg',
      title: 'Este es un titulo'
    },
    {
      id: '123',
      url: 'https://example/cosa.jpg',
      title: 'Este es un titulo'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    const wrapper = shallow(<GifGrid category={category} />)
    // expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
})
