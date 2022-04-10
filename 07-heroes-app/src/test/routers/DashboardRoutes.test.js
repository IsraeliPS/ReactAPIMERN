import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { DashboardRoutes } from '../../routers/DashboardRoutes'

describe('Pruebas en <DashboardRoutes />', () => {
  const contextValue = {
    user: {
      logged: true,
      name: 'Juanito'
    }
  }
  test('Debe de mostrarse correctamente ruta por defecto o Marvel', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    console.log(wrapper.html())

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.text-info').text().trim()).toBe('Juanito')
  })

  test('Debe de mostrarse correctamente ruta DC', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/dc']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    console.log(wrapper.html())

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.text-info').text().trim()).toBe('Juanito')
    expect(wrapper.find('h1').text().trim()).toEqual('DcScreen')
  })
})
