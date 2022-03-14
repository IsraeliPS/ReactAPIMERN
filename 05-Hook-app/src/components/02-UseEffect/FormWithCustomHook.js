import React, { useEffect } from 'react'
import { useForm } from '../../Hooks/useForm'
import '../styles.css'

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formValues

  useEffect(() => {
    console.log('email cambio')
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
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
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='*******'
          autocomplete='off'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Guardar
      </button>
    </form>
  )
}
