// import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs'

import GifGridItem from '../components/GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

import PropTypes from 'prop-types'

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
      {loading && <p>Loading</p>}

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
