import React from 'react';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';
import { useTodo } from '../../Hooks';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingsTodosCount,
    handleToggle,
    handleDelete,
    handleAddTodo,
  } = useTodo();

  return (
    <div>
      <h1>
        TodoApp: {todosCount}, <small>pendientes: </small>{pendingsTodosCount}
      </h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>

        <div className='col-5'>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
