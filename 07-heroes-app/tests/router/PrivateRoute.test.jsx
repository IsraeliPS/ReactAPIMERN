import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en el <PrivateRoute/>', () => {
  test('debe de mostrar el children si está autenticado ', () => {
    Storage.prototype.setItem = jest.fn();

    const contextvalue = {
      logged: true,
      user: {
        name: 'juan',
        id: '123',
      },
    };
    render(
      <AuthContext.Provider value={contextvalue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta privada')).toBeTruthy();

    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman")
  });
});
