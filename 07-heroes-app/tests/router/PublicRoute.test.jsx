const { render, screen } = require('@testing-library/react');
const { MemoryRouter, Route, Routes } = require('react-router-dom');
const { AuthContext } = require('../../src/auth');
const { PublicRoute } = require('../../src/router/PublicRoute');

describe('Prueba en <PublicRoute/>', () => {
  test('debe de mostrar el children si no está autenticado', () => {
    const contextvalue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextvalue}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta pública')).toBeTruthy();
  });

  test('debe de navegar si esta autenticado', () => {
    const contextvalue = {
      logged: true,
      user: {
        name: 'juan',
        id: '123',
      },
    };
    render(
      <AuthContext.Provider value={contextvalue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            
            <Route
              path='login'
              element={
                <PublicRoute>
                  <h1>Ruta pública</h1>
                </PublicRoute>
              }
            />
            <Route path='marvel' element={<h1>Página de Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Página de Marvel')).toBeTruthy();
  });
});
