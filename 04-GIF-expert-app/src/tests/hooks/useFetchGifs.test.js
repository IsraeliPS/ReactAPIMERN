import '../../setupTests'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de retornar el estado inicial', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Samuray X'))
    const { data, loading } = result.current

    await waitForNextUpdate()
    expect(data).toEqual([])
    expect(loading).toBe(true)
  })

  test('debe de retonar un arrego de imagenes y el loading en false', async()=>{
    const { result,waitForNextUpdate } = renderHook( () => useFetchGifs('Samuray X'))
    await waitForNextUpdate()

    const { data, loading } = result.current
    
    expect(data.length).toEqual(10)
    expect(loading).toBe(false)
  })
})
