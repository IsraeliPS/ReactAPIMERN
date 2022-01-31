import React, { useState } from 'react'
import AddCategory from './components/AddCategory'

function GifExpertApp () {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

  // const handleAdd = (e) => {
  //   setCategories(...categories, 'Hunter X')
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      <ol>
        {
            categories.map((categoy) => {
              return <li key={categoy}>{categoy}</li>
            })
          }
      </ol>
    </div>
  )
}

export default GifExpertApp
