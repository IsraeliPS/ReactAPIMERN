// import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs'

import GifGridItem from './GifGridItem'
import { useFetchGifs } from './hooks/useFetchGifs'

function GifGrid ({ category }) {
  // const [images, setImages] = useState([])

  const { data: images, loading } = useFetchGifs(category)
  // useEffect(() => {
  //   getGifs(category)
  //     .then(setImages)
  // }, [category])

  // console.log(category)

  return (
    <>
      <h3>{category}</h3>
      {loading ? <>Loading</> : null}

      <div className='card-grid'>
        {images?.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}
// Hp9LfGIZYzHTfwoE4XLnq9H44dAGwi2t
export default GifGrid
