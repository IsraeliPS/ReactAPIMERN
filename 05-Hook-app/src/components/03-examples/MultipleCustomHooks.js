import React from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { useCounter } from '../../Hooks/useCounter'

import '../styles.css'

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const { author, quote } = !!data && data[0]

  //   console.log(author, quote)
  return (
    <div>
      <h1 className='text-center'> BreakingBad Quotes</h1>

      <hr />

      {
        loading
          ? (

            <div className='alert alert-info text-center'> Loading...</div>
            )
          : (

            <blockquote className='blockquote text-end'>
              <p className='mb-2'> {quote}</p>
              <footer className='blockquote-footer'>{author}</footer>
            </blockquote>
            )
      }
      <button
        className='btn btn-primary boton'
        onClick={increment}
      >
        Siguiente Quote
      </button>

    </div>
  )
}
