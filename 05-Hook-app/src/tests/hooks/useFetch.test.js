import '@testing-library/jest-dom'
import '../../setupTests'
import { renderHook, act } from '@testing-library/react-hooks'

import { useFetch } from '../../Hooks/useFetch'


describe('Pruebas de useFetch', () => {
  test('Debe retornar la informacion por defecto', () => {
    const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
    const { data, loading, error } = result.current

    expect(data).toBe(null)
    expect(loading).toBe(true)
    expect(error).toBe(null)
  })

  test('debe de tener la info deseada, loading false, error false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apidfsa/users?page=2'))

    await waitForNextUpdate()

    const { data, loading, error } = result.current

    expect(data).toBe(null)
    expect(loading).toBe(false)
    expect(error).toBe('No se pudo cargar la info')
  })
})
