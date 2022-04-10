import React from 'react'
import { shallow } from 'enzyme'

import { types } from '../../types/types'
import { authReducer } from '../../auth/authReducer'

describe('Pruebas en authReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {})

    expect(state).toEqual({ logged: false })
  })

  test('Debe de autenticar y colocar el "name" del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Israeli'
      }
    }

    const state = authReducer({ logged: false }, action)

    expect(state).toEqual({
      logged: true,
      name: 'Israeli'

    })
  })

  test('Debe de borrar el "name" del usuario y poner logged en false', () => {
    const action = {
      type: types.logout
    }

    const state = authReducer({
      logged: true,
      name: 'Israeli'
    }, action)

    expect(state).toEqual({
      logged: false
    })
  })
})
