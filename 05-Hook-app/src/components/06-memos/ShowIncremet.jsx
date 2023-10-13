import React, { memo } from 'react'

export const ShowIncremet = memo(({ increment }) => {
  console.log('Me volví a generar :(')
  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        increment(5)
      }}
    >
      Incrementar
    </button>
  )
})
