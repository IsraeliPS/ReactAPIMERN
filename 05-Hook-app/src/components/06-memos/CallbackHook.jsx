import React, { useCallback, useState } from 'react'

import '../styles.css'
import { ShowIncremet } from './ShowIncremet'

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  //   const increment = () => {
  //     setCounter(counter + 1)
  //   }

  const increment = useCallback(
    (num) => {
      setCounter(c => c + num)
    },
    [setCounter]
  )

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncremet increment={()=>increment()} />

    </div>
  )
}
