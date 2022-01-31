import React, { useState } from 'react'

function AddCategory ({ setCategories }) {
  const [inputValue, setInputValue] = useState('Hola Mundo')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCategories(cat => [...cat, inputValue])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default AddCategory
