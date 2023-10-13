import React from 'react';
import { useFetch, useCounter } from '../../Hooks';

import '../styles.css';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  //   console.log(author, quote)
  return (
    <div>
      <h1 className='text-center'> BreakingBad Quotes</h1>

      <hr />

      {loading ? <LoadingQuote /> : <Quote author={author} quote={quote}/>}

      <button className='btn btn-primary boton' onClick={() => increment()}>
        Siguiente Quote
      </button>
    </div>
  );
};
