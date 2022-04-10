import { mount } from 'enzyme'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { AuthContext } from '../../../auth/authContext'
import { NavBar } from '../../../components/ui/NavBar'
import { types } from '../../../types/types'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

describe('Pruebas en <NavBar />', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Pedro'
    }
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<NavBar />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>)

  test('Debe de mostrar correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.text-info').text().trim()).toBe('Pedro')
  })

  test('Debe de llamar el logout, llamar el navigate y el dispatch con los argumentos', () => {
    wrapper.find('button').prop('onClick')()

    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout })
    expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true })
  })
})
