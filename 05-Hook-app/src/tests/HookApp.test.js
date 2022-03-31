import React from 'react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import '../setupTests'

import HookApp from '../HookApp'

describe('Pruebas en <HookApp />', () => {
  test('Debe mostrar correctamente el componente', () => {
    const wrapper = shallow(<HookApp />)
    expect(wrapper).toMatchSnapshot()
  })
})
