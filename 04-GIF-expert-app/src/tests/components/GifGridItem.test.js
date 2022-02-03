import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import GifGridItem from '../../components/GifGridItem'
import '../../setupTests'

describe('Pruebas de <GifGridItem />', () => {
  const titulo = 'Dragon Ball'
  const url = 'www.localhsot.com/algo.jpg'
  const wrapper = shallow(<GifGridItem title={titulo} url={url} />)

  // toma una foto del componente
  test('Debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // comprueba que el texto que recibe el componente sea el mismo enviado
  test('Debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(titulo)
  })

  // comprueba que la url que recibe el componente sea el mismo enviado
  test('Debe de tener la imagen igual al  url y alt de los props', () => {
    const img = wrapper.find('img')
    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(titulo)
  })

  // comprueba que el div tenga una clase de fadein accediendo a las props
  test('Debe de tener animate__fadeInLeft', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')

    expect(className.includes('animate__fadeInLeft')).toBe(true)
  })
})
