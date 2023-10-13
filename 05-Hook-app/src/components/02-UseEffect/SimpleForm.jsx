import React, { useEffect, useState } from 'react'
import '../styles.css'
import { Message } from './Message'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })
  const { name, email } = formState

  useEffect(() => {
    // console.log('Hey!')
  }, [])

  useEffect(() => {
    // console.log('FormState Cambio')
  }, [formState])

  useEffect(() => {
    // console.log('email Cambio')
  }, [email])

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autocomplete='off'
          value={name}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='Tuemail@gmail.com'
          autocomplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {(name === '123') && <Message />}
    </>
  )
}
