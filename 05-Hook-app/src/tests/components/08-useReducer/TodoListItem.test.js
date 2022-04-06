import React from 'react'
import { shallow } from 'enzyme'
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem'
import { demoTodos } from '../../fixtures/demoTodos'

describe('Pruebas en <TodoListItem />', () => {
  const handleDelete = jest.fn()
  const handleToggle = jest.fn()
  let wrapper = shallow(<TodoListItem
    todo={demoTodos[0]}
    handleToggle={handleToggle}
    handleDelete={handleDelete}
    index='1'
                        />)

  beforeEach(() => {
    wrapper = shallow(
      <TodoListItem
        todo={demoTodos[0]}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        index='1'
      />
    )
  })

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('debe llamar la funcion borrar', () => {
    wrapper.find('button').simulate('click')
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
  })

  test('debe llamar la funcion toggle', () => {
    wrapper.find('p').simulate('click')
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
  })

  test('debe el texto correctamente', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(`11. ${demoTodos[0].desc}`)
  })

  test('debe de tener la clase complete si el TODO es true', () => {
    const todo = demoTodos[0]
    todo.done = true

    const wrapper = shallow(
      <TodoListItem
        todo={todo}
      />)

    expect(wrapper.find('p').hasClass('complete')).toBe(true)
  })
})
