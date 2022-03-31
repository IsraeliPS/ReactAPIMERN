import '@testing-library/jest-dom'
import '../../setupTests'
import { renderHook, act } from '@testing-library/react-hooks'

import { useForm } from '../../Hooks/useForm'

describe('Pruebas en CustomHook useForm', () => {
  const initialForm = {
    name: 'Israelí',
    email: 'israeli.ps@gmail.com'
  }

  test('Debe de regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [formValues, handleInputChange, reset] = result.current

    expect(formValues).toBe(initialForm)
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe('function')
  })

  test('debe de cambiar el valor del formulario', () => {
    const newForm = {
      target: {
        name: 'name',
        value: 'Pepe Pecas'
      }
    }

    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange] = result.current

    act(() => handleInputChange(newForm))

    const [formValues] = result.current
    expect(formValues).toEqual({ ...initialForm, name: 'Pepe Pecas' })
  })

  test('debe de re-establecer el valor del formulario con reset', () => {
    const newForm = {
      target: {
        name: 'name',
        value: 'Pepe Pecas'
      }
    }

    const { result } = renderHook(() => useForm(initialForm))
    const [formValues, handleInputChange, reset] = result.current

    act(() => {
      handleInputChange(newForm)
      reset()
    })

    expect(formValues).toBe(initialForm)
  })
})
