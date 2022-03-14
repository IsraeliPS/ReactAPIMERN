import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { useCounter } from '../../Hooks/useCounter'

import './Layout.css'

export const Layout = () => {
  const { counter, increment } = useCounter(1)
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { quote } = !!data && data[0]

  const pTag = useRef()
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1 className='text-center'> Layout Effects </h1>

      <hr />

      <blockquote className='blockquote text-end'>
        <p
          ref={pTag}
          className='mb-2'
        >
          {quote}
        </p>

      </blockquote>
      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>

      <button
        className='btn btn-primary boton'
        onClick={increment}
      >
        Siguiente Quote
      </button>

    </div>
  )
}
