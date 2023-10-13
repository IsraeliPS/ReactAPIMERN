import React from 'react';
import { useForm } from '../../Hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      onResetForm();
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    handleAddTodo(newTodo);

    onResetForm();
  };
  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='description'
          placeholder='Aprender...'
          autoComplete='off'
          onChange={onInputChange}
          value={description}
        />
        <button
          type='submit'
          className='btn btn-outline-primary mt-1 btn-block'
        >
          Agregar
        </button>
      </form>
    </>
  );
};
