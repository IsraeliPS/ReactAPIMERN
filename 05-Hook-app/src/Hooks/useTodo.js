import { useEffect, useReducer } from 'react';

import { todoReducer } from '../components/08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(window.localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    dispatch({
      type: 'delete',
      payload: todoId,
    });
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  return {
    handleAddTodo,
    handleToggle,
    handleDelete,
    todos,
    todosCount,
    pendingsTodosCount: pendingTodosCount,
  };
};
