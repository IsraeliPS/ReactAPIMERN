import { useState } from 'react';

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);
  const increment = (value = 1) => {
    setCounter(counter + 1);
  };

  const decrement = (value = 1) => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    reset,
    increment,
    decrement,
  };
};
