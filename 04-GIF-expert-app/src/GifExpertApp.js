import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

function GifExpertApp ({ defaultCategories = [] }) {
  // const [categories, setCategories] = useState(['Samurai X'])
  const [categories, setCategories] = useState(defaultCategories)

  // const handleAdd = (e) => {
  //   setCategories(...categories, 'Hunter X')
  // }
  console.log(categories)
  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      <ol>
        {
            categories.map((category) =>
              <GifGrid
                key={category}
                category={category}
              />
            )
          }
      </ol>
    </div>
  )
}

export default GifExpertApp
