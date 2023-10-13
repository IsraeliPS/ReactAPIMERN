import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import '../styles.css'

export const CounterWithCustomHook = () => {
  const { state, reset, increment, decrement } = useCounter(20)
  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />
      <button className='btn btn-primary boton' onClick={() => decrement(2)}>-1</button>
      <button className='btn btn-primary boton' onClick={reset}>reset</button>
      <button className='btn btn-primary boton' onClick={() => increment(2)}>+1</button>
    </>
  )
}
